import React from 'react'
import './Respostas.css'

const Respostas = (props) => {
  return (
    <div>
      {
        props.respostas.map( (resposta, index) => 
          <div class="resposta">
            <input type="radio" id = {index} value = {resposta} name="resposta" />
            <label for={index} class="label-resposta">{resposta}</label>
          </div>
        )
      }
    </div>
  )
}

export default Respostas