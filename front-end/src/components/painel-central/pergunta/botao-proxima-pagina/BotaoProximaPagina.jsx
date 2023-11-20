import React from 'react'
import { Link } from 'react-router-dom'
import './BotaoProximaPagina.css'

const BotaoProximaPagina = (props) => {

  let textoBotao;

  if(props.proximaPagina === "/resultado") {
    textoBotao = "Finalizar o quiz";
  } else {
    textoBotao = "Próxima Pergunta";
  }

  return (
    <div id="area-botao">
    <Link to={props.disabledParent ? `${props.proximaPagina}` : '#'} disabled={!props.disabledParent} ><button className='botao-proxima-pagina' disabled={!props.disabledParent}>{textoBotao}</button></Link>
    </div>
  )
}

export default BotaoProximaPagina