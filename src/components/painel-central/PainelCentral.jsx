import React from 'react';
import './PainelCentral.css';
import './PainelCentralResponsive.css';

const PainelCentral = ({children}) => {
  return (
    <div className='painel-central'>
        {children}
    </div>
  )
}

export default PainelCentral