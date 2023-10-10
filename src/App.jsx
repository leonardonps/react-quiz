import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Questao1 from './pages/Questao1/Questao1'

const questaoPergunta= ["1. O que é o React?", ["a) É uma biblioteca", "b) É um framework"]];


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questao-1" element={ <Questao1 questao1= { questaoPergunta }/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
