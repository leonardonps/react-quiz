import React from "react";
import LogoReact from "../../assets/react-logo.png";
import "./PainelResultado.css";

const PainelResultado = (props) => {
  if (props.porcentagemPontuacao < 25) {
    return (
      <>
        <img id="logoHome" src={LogoReact} alt="LogoReact" />
        <h1 className="titulo-resultado">O Elétron Aprendiz</h1>
      </>
    );
  } else if (
    props.porcentagemPontuacao >= 25 &&
    props.porcentagemPontuacao <= 50
  ) {
    return (
      <>
        <img id="logoHome" src={LogoReact} alt="LogoReact" />
        <h1 className="titulo-resultado">O Quimico Reactivo</h1>
      </>
    );
  }
};

export default PainelResultado;
