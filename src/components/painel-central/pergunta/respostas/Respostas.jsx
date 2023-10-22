import React, { useState } from 'react'
import './Respostas.css'
import Swal from 'sweetalert2'


const Respostas = (props) => {

  const [disabled, setDisabled] = useState(false);

  function desativarRespostas() {
    setDisabled(true);
    props.setDisabledParent(true);
  }

  function desativarEfeitoHover() {
    const elementosRespostas = Array.from(document.querySelectorAll(`button[class="resposta"]`));

    elementosRespostas.map(element => {
      element.classList.add('no-hover');
    })
  }

  function atualizarPontuacaoQuiz(e) {
    if(props.respostaCorreta === e.target.value){
      props.adicionarUmPonto(props.pontos + 1)
    }
  }

  function destacarCorResposta(e) {
    const elementoRespostaCorreta = document.querySelector(`button[value="${props.respostaCorreta}"]`);

    if (e.target.value === props.respostaCorreta) {
      e.target.classList.add('resposta-correta')
    } else {
      e.target.classList.add('resposta-errada')
      elementoRespostaCorreta.classList.add('resposta-correta');
    }
  }

  function confirmarResposta(e) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: "Não será possível alterar sua resposta depois.",
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
        desativarEfeitoHover()
        atualizarPontuacaoQuiz(e)
        destacarCorResposta(e)
      }
    })
  }

  return (
    <>
      {
        props.respostas.map( (resposta, index) =>
              <button type='text'
                      key={index}
                      className='resposta'
                      disabled={disabled}
                      value={resposta}
                      onClick={e => {
                      confirmarResposta(e);
                  }}>{resposta}</button>
        )
      }
    </>
  )

}

export default Respostas