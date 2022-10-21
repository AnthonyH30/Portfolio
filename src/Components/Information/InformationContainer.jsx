import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import './informationcontainer.scss'

function InformationContainer() {
  return (
    <section id='information'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(21) 972805727</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p id='email'>anthonyharisson30@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Magé, RJ</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer;