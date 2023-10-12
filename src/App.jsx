import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Pergunta from './components/pergunta/Pergunta'
import bancoPerguntasRespostas from './banco-perguntas-respostas/BancoPerguntasRespostas'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          {
            bancoPerguntasRespostas.map( (perguntaRespostas, index) => 
              <Route path={`/pergunta/${index+1}`} key={index} element = {
              <Pergunta 
                id={index+1} 
                key={index+1}
                perguntaRespostas = {perguntaRespostas} 
                proximaPagina = {isFinalQuestion(index)}
                />}></Route>
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
