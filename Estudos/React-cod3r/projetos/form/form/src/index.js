import React from 'react';
import ReactDOM from 'react-dom';
import BtnForm from './componentes/pequenos/btnForm/btn'
import Check from './componentes/pequenos/checkForm/check'
//css
import './index.css'

const root = document.getElementById('root')

ReactDOM.render(

  <form>

    <div className='inputBloco'>
      <label for='email'>E-mail</label>
      <input id='email' placeholder='Insira seu e-mail' />
    </div>

    <div className='inputBloco'>
      <label for='senha'>Senha</label>
      <input id='senha' placeholder='Insira sua senha' />
    </div>
    
    <Check />
    <BtnForm />

  </form>
  , root
);


