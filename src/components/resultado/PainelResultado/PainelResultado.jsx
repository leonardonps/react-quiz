import React from "react";
import ImgResult1 from "../../assets/1_eletron_aprendiz.png";
import ImgResult2 from "../../assets/2_quimico_reactivo.png";
import ImgResult3 from "../../assets/3_mestre_reacoes.png";
import ImgResult4 from "../../assets/4_atomo_nuclear.png";
import ImgResult5 from "../../assets/5_radioativo.png";
import "./PainelResultado.css";

const PainelResultado = (props) => {
  if (props.porcentagemPontuacao < 25) {
    return (
      <>
        <img className="imgResult" src={ImgResult1} alt="ImgResult1" />
        <h1 className="titulo-resultado">O Elétron Aprendiz</h1>
      </>
    );
  } else if (
    props.porcentagemPontuacao >= 25 &&
    props.porcentagemPontuacao <= 50
  ) {
    return (
      <>
        <img className="imgResult" src={ImgResult2} alt="ImgResult2" />
        <h1 className="titulo-resultado">O Quimico Reactivo</h1>
      </>
    );
  } else if (
    props.porcentagemPontuacao >= 50 &&
    props.porcentagemPontuacao <= 75
  ) {
    return (
      <>
        <img className="imgResult" src={ImgResult3} alt="ImgResult3" />
        <h1 className="titulo-resultado">O Mestre das Reações</h1>
      </>
    );
  } else if (
    props.porcentagemPontuacao >= 75 &&
    props.porcentagemPontuacao <= 99
  ) {
    return (
      <>
        <img className="imgResult" src={ImgResult4} alt="ImgResult4" />
        <h1 className="titulo-resultado">O Átomo Nuclear</h1>
      </>
    );
  } else if (props.porcentagemPontuacao == 100) {
    return (
      <>
        <img className="imgResult" src={ImgResult5} alt="ImgResult5" />
        <h1 className="titulo-resultado">Radioativo</h1>
        
      </>
    );
  }
};

export default PainelResultado;
