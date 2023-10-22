import React from "react";
import PainelCentral from "../painel-central/PainelCentral";
import PainelResultado from "./PainelResultado/PainelResultado";
import "./Resultado.css";
import { Link } from "react-router-dom";

const Resultado = (props) => {
  const porcentagemPontuacao = (props.pontos / props.qtdPerguntas) * 100;
  return (
    <PainelCentral>
      <PainelResultado porcentagemPontuacao={porcentagemPontuacao} />

      <h2 className="mensagem-resultado">
        Parabéns! Você acertou {props.pontos} de {props.qtdPerguntas}
      </h2>
      <Link to="/">
        <button className="button-reset" id="btn-reset">
          Voltar a Home
        </button>
      </Link>
    </PainelCentral>
  );
};

export default Resultado;
