import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/painel-central/home/Home'
import Pergunta from './components/painel-central/pergunta/Pergunta'
import Resultado from './components/painel-central/resultado/Resultado'
import './App.css'

const url ="https://json-server-khaki-alpha.vercel.app/bancoPerguntasRespostas";

function App() {

  const [pontos, adicionarUmPonto] = useState(0);

  const [bancoPerguntasRespostas, setBancoPerguntasRespostas] = useState([]);

  useEffect (() => {
    async function fetchData (){
      const res = await fetch (url);
      const data = await res.json();

      setBancoPerguntasRespostas(data);
    }
  fetchData();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" 
                 element={<Home />}></Route>
          <Route path="/resultado" element = {
                <Resultado
                  qtdPerguntas = {(bancoPerguntasRespostas.length)}
                  pontos = {pontos}
                  adicionarUmPonto = {adicionarUmPonto}
                  />}></Route>
          {
            bancoPerguntasRespostas.map( (perguntaRespostas, index) => 
              <Route path={`/pergunta/${index+1}`} key={index} element = {
                <Pergunta 
                 id = {index+1} 
                 key = {index+1}
                 perguntaRespostas = {perguntaRespostas} 
                 proximaPagina = {isFinalQuestion(index, bancoPerguntasRespostas.length)}
                 adicionarUmPonto = {adicionarUmPonto}
                 pontos = {pontos}
                />
              }></Route>
            )
          }
      </Routes>
    </BrowserRouter>
  )
  
}

function isFinalQuestion(index, tamanhoBanco) {
  if(index === (tamanhoBanco - 1)) {
    return "/resultado";
  } else {
    return `/pergunta/${(index+2)}`;
  }
}


export default App
