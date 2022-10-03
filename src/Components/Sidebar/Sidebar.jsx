import React from 'react';
import avatar from '../../Img/eu.jpeg';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

import './sidebar.scss';
import InformationContainer from '../Information/InformationContainer';

function Sidebar() {
  return (
    <aside className='sidebar'>
        <img src={avatar} alt="Anthony Harisson" />
        <p className='title'>Desenvolvedor Front End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="#" className='btn'>Baixar Currículo</a>
    </aside>
  )
}

export default Sidebar;