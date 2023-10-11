import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Questao from './components/questao/Questao'
import bancoPerguntasRespostas from './banco-perguntas-respostas/BancoPerguntasRespostas'



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pergunta-1" element={<Questao perguntaRespostas={bancoPerguntasRespostas[0]}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
