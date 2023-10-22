import React from "react";
import PainelCentral from "../painel-central/PainelCentral";
import PainelResultado from "./PainelResultado/PainelResultado";
import './Resultado.css';

const Resultado = (props) => {
  const porcentagemPontuacao = (props.pontos / props.qtdPerguntas) * 100;
  return (
    <PainelCentral>
      <PainelResultado porcentagemPontuacao={porcentagemPontuacao} />

      <h2 className = "mensagem-resultado">
        Parabéns! Você acertou {props.pontos} de {props.qtdPerguntas}
      </h2>
    </PainelCentral>
  );
};

export default Resultado;
