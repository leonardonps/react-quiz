import React from 'react'
import { Link } from 'react-router-dom'
import './BotaoProximaPagina.css'

const BotaoProximaPagina = (props) => {

  let textoBotao;

  if(props.proximaPagina === "/resultado") {
    textoBotao = "Finalizar o quiz"
  } else {
    textoBotao = "Próxima Pergunta"
  }

  return (
    <div>
    <Link to={props.proximaPagina}><button className='button-proxima-pagina' disabled={!props.disabledParent}>{textoBotao}</button></Link>
    </div>
  )
}

export default BotaoProximaPagina