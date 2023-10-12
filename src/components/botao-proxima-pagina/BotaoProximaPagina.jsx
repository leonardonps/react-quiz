import React from 'react'
import { Link } from 'react-router-dom'

const BotaoProximaPagina = (props) => {
  return (
    <div>
    <Link to={props.proximaPagina}><button disabled={!props.disabledParent}>Próxima Pergunta</button></Link>
    </div>
  )
}

export default BotaoProximaPagina