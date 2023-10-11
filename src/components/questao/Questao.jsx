import React from 'react'
import "./Questao.css"
import Respostas from '../respostas/Respostas'

const Questao = (props) => {
  return (
    <div class="painel-central">
      <h1 class="pergunta">{props.id}. {props.perguntaRespostas.pergunta}</h1>
      <Respostas respostas={props.perguntaRespostas.respostas} />
    </div>
  )
}

export default Questao