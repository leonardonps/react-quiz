import React from "react";
import ImgResult1 from "../../../../assets/eletron-aprendiz-1.png"
import ImgResult2 from "../../../../assets/quimico-reactivo-2.png"
import ImgResult3 from "../../../../assets/mestre-reacoes-3.png"
import ImgResult4 from "../../../../assets/atomo-nuclear-4.png"
import ImgResult5 from "../../../../assets/radioativo-5.png"
import "./PainelResultado.css";
import "./PainelResultadoResponsive.css";

const PainelResultado = (props) => {

  const porcentagemPontuacao = (props.pontos / props.qtdPerguntas) * 100;

  if (porcentagemPontuacao < 25) {
    return (
      <>
        <img className="img-resultado" src={ImgResult1} alt="Emblema Életron Aprendiz" />
        <h1 className="titulo-resultado">O Elétron Aprendiz</h1>
        <h2 className="mensagem-resultado"> Um passo de cada vez, pequeno gafanhoto! </h2>
      </>
    );
  } else if (
    porcentagemPontuacao >= 25 &&
    porcentagemPontuacao < 50
  ) {
    return (
      <>
        <img className="img-resultado" src={ImgResult2} alt="Emblema Químico Reactivo" />
        <h1 className="titulo-resultado">O Químico Reactivo</h1>
        <h2 className="mensagem-resultado"> Continue a nadar... Continue a nadar... Você está progredindo! </h2>
      </>
    );
  } else if (
    porcentagemPontuacao >= 50 &&
    porcentagemPontuacao < 75
  ) {
    return (
      <>
        <img className="img-resultado" src={ImgResult3} alt="Emblema Mestre das Reações" />
        <h1 className="titulo-resultado">O Mestre das Reações</h1>
        <h2 className="mensagem-resultado"> Parabéns! Um novo mestre do universo Front-End está a caminho... </h2>
      </>
    );
  } else if (
    porcentagemPontuacao >= 75 &&
    porcentagemPontuacao < 100
  ) {
    return (
      <>
        <img className="img-resultado" src={ImgResult4} alt="Emblema Átomo Nuclear" />
        <h1 className="titulo-resultado">O Átomo Nuclear</h1>
        <h2 className="mensagem-resultado"> Parabéns! Você conhece mesmo sobre o React.</h2>
      </>
    );
  } else if (porcentagemPontuacao === 100) {
    return (
      <>
        <img className="img-resultado" src={ImgResult5} alt="Emblema Radioativo" />
        <h1 className="titulo-resultado">Radioativo</h1>
        <h2 className="mensagem-resultado"> React rocks!</h2>
      </>
    );
  }
};

export default PainelResultado;
