import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Questao from './components/questao/Questao'
import bancoPerguntasRespostas from './banco-perguntas-respostas/BancoPerguntasRespostas'


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          
          {
            bancoPerguntasRespostas.map( (perguntaRespostas, index) => 
              <Route path={`/pergunta/${index+1}`} key={index} element = {<Questao id={index+1} perguntaRespostas = {perguntaRespostas}/>}></Route>
            )
          }
      </Routes>
    </BrowserRouter>
  )
}

export default App
