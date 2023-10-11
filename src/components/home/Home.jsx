import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class='painel-central'>
        <img src="" alt="Logo React" />
        <h1 id="titulo">React Quiz</h1>
         <Link to="pergunta-1"><button class="button-17"
                id="btn-iniciar">Iniciar o React Quiz</button></Link>
    </div>
       
  )
}

export default Home