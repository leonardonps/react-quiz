import React from "react";
import PainelCentral from "../PainelCentral";
import PainelResultado from "./PainelResultado/PainelResultado";
import "./Resultado.css";
import { Link } from "react-router-dom";

const Resultado = (props) => {
 
  return (
    <PainelCentral>
      <PainelResultado pontos = {props.pontos} qtdPerguntas = {props.qtdPerguntas}/>
      <h2 className="mensagem-resultado">Você acertou {props.pontos} de {props.qtdPerguntas} perguntas</h2>
      <Link to="/">
        <button type="text" id="botao-voltar-tela-inicial" onClick={() => { props.adicionarUmPonto(0)}}>
          Voltar para tela inicial
        </button>
      </Link>
    </PainelCentral>
  );

};

export default Resultado;
