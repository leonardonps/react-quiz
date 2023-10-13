import React, { useState } from 'react'
import './Respostas.css'


const Respostas = (props) => {

  const [disabled, setDisabled] = useState(false)

  const[eventTargetValue, setEventTargetValue] = useState()


  function desativarRespostas(){
    setDisabled(true);
    props.setDisabledParent(true);
  }

  function atualizarPontuacaoQuiz(e){
    setEventTargetValue(e.target.value)

    if(props.respostaCorreta === e.target.value){
      props.adicionarUmPonto(props.pontos + 1)
    }
  }

  return (
    <>
      {
        props.respostas.map( 
          (resposta, index) =>
            <label for={index} className="label-resposta">
              <input type="radio" 
                     id = {index} 
                     key = {index}
                     name="respostas" 
                     value={resposta}
                     disabled = {disabled}
                     onChange = {e => {
                      desativarRespostas()
                      atualizarPontuacaoQuiz(e)
                    }}
                     className ='radio-resposta' />
              <span className='span-resposta'>{resposta}</span>

            </label>
        )
      }
    </>
  )
}

export default Respostas