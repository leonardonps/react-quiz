import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/painel-central/home/Home'
import Pergunta from './components/painel-central/pergunta/Pergunta'
import bancoPerguntasRespostas from './banco-perguntas-respostas/BancoPerguntasRespostas'
import Resultado from './components/painel-central/resultado/Resultado'

import './App.css'

function App() {

  const [pontos, adicionarUmPonto] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" 
                 element={<Home />}></Route>
          <Route path="/resultado" element = {
                <Resultado
                  pontos = {pontos}
                  qtdPerguntas = {(bancoPerguntasRespostas.length)}/>}></Route>
          {
            bancoPerguntasRespostas.map( (perguntaRespostas, index) => 
              <Route path={`/pergunta/${index+1}`} key={index} element = {
                <Pergunta 
                 id = {index+1} 
                 key = {index+1}
                 perguntaRespostas = {perguntaRespostas} 
                 proximaPagina = {isFinalQuestion(index)}
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

function isFinalQuestion(index) {
  if(index === (bancoPerguntasRespostas.length - 1)) {
    return "/resultado";
  } else {
    return `/pergunta/${(index+2)}`
  }
}




export default App
