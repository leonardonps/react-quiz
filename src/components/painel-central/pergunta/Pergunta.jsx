import React, { useState } from 'react'
import "./Pergunta.css"
import Respostas from './respostas/Respostas'
import PainelCentral from '../PainelCentral'
import BotaoProximaPagina from './botao-proxima-pagina/BotaoProximaPagina'

const Pergunta = (props) => {
 
  const [disabledParent, setDisabledParent] = useState()

  return (
   <div>
      <PainelCentral>
        <h1 className="pergunta">{props.id}. {props.pontos}{props.perguntaRespostas.pergunta}</h1>
        <Respostas 
        respostas = {props.perguntaRespostas.respostas} 
        respostaCorreta = {props.perguntaRespostas.respostaCorreta}
        setDisabledParent = {setDisabledParent}
        adicionarUmPonto = {props.adicionarUmPonto}
        pontos = {props.pontos}
        />
        <BotaoProximaPagina 
        proximaPagina = {props.proximaPagina}
        disabledParent = {disabledParent}
        />
     </PainelCentral>
   </div>
  )

}

export default Pergunta