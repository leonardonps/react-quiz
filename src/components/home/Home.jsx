import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import PainelCentral from '../painel-central/PainelCentral'
import LogoReact from '../assets/react-logo.png'


const Home = () => {
  return (
    <div>
      <PainelCentral>
        <img id='logoHome'src={LogoReact} alt="LogoReact"/>
        <h1 id="titulo">React Quiz</h1>
        <Link to="/pergunta/1"><button class="button-17"
                id="btn-iniciar">Iniciar o React Quiz</button></Link>
     </PainelCentral>
    </div>

  )
}

export default Home;