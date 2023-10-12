import React, { useState } from 'react'
import './Respostas.css'


const Respostas = (props) => {

  const [disabled, setDisabled] = useState(false)

  function atualizarStatusDisabled(){
    setDisabled(true);
    props.setDisabledParent(true)
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
                     name="resposta" 
                     disabled = {disabled}
                     onChange = {atualizarStatusDisabled}
                     className ='radio-resposta' />
              <span className='span-resposta'>{resposta}</span>
            </label>
        )
      }
    </>
  )
}

export default Respostas