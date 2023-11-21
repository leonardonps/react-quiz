import React from 'react'
import './PainelCentral.css'

const PainelCentral = ({children}) => {
  return (
    <div className='painel-central'>
        {children}
    </div>
  )
}

export default PainelCentral