import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import PainelCentral from '../painel-central/PainelCentral'

const Home = () => {
  return (
    <div>
     <PainelCentral>
        <img src="" alt="Logo React" />
        <h1 id="titulo">React Quiz </h1>
         <Link to="/pergunta/1"><button className="button-17"
                id="btn-iniciar">Iniciar o React Quiz</button></Link>
     </PainelCentral>
    </div>

  )
}

export default Home