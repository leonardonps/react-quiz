import React from 'react'
import PainelCentral from '../PainelCentral'

const Resultado = (props) => {
  return (
    <PainelCentral>
      <h1>Parabéns! Você acertou {props.pontos} de {props.qtdPerguntas}</h1>
    </PainelCentral>
  )
}

export default Resultado