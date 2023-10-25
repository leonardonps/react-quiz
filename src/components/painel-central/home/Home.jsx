import React from 'react';
import "./Home.css";
import "./HomeResponsive.css";
import { Link } from 'react-router-dom';
import PainelCentral from '../PainelCentral';
import LogoReact from '../../../assets/react-logo.png';


const Home = () => {
  return (
    <div>
      <PainelCentral>
        <img id='logoHome'src={LogoReact} alt="Logo do React"/>
        <h1 id="titulo">React Quiz</h1>
        <Link to="/pergunta/1"><button className="botao" id="botao-iniciar">Iniciar o React Quiz</button></Link>
     </PainelCentral>
    </div>

  )
}

export default Home;