import React, { useState } from 'react'
import './Respostas.css'
import Swal from 'sweetalert2'


const Respostas = (props) => {

  const [disabled, setDisabled] = useState(false)

  function desativarRespostas(){
    setDisabled(true);
    props.setDisabledParent(true);
  }

  function atualizarPontuacaoQuiz(e){
    if(props.respostaCorreta === e.target.value){
      props.adicionarUmPonto(props.pontos + 1)
    }
  }

  function confirmarResposta(e) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: "Não será possível alterar sua resposta depois",
      icon: 'warning',
      iconColor: 'var(--laranja-destaque)',
      showCancelButton: true,
      confirmButtonColor: 'var(--azul-react)',
      cancelButtonColor: 'var(--cinza)',
      confirmButtonText: 'Sim, estou',
      cancelButtonText: 'Escolher outra resposta',
    }).then((result) => {
      if (result.isConfirmed) {
        desativarRespostas()
        atualizarPontuacaoQuiz(e)
      }
    })
  }

  return (
    <>
      {
        props.respostas.map( (resposta) =>
      
        <input type="button" className='button-resposta' value={resposta} onClick={e => {
                         confirmarResposta(e) }} />
          
          
        //   (resposta, index) =>
        //  <label for={index} className="label-resposta">              
        //    <input type="radio" 
        //           id = {index} 
        //           key = {index}
        //           name="respostas" 
        //           value={resposta}
        //           disabled = {disabled}
        //           onChange = {e => {
        //             confirmarResposta(e) }}
        //           className ='radio-resposta' />
        //     <span className='span-resposta'>{resposta}</span>

        //  </label>
        )
      }
    </>
  )
}

export default Respostas