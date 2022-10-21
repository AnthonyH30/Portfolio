import React from 'react';
import avatar from '../../Img/eu.jpeg';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import { BsCloudArrowDownFill } from 'react-icons/bs'

import './sidebar.scss';
import InformationContainer from '../Information/InformationContainer';

function Sidebar() {
  return (
    <aside className='sidebar'>
        <img src={avatar} alt="Anthony Harisson" />
        <p className='title'>Desenvolvedor Front End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="../../public/curriculo-AnthonyHarisson.pdf" download className='btn'>Baixar Currículo <BsCloudArrowDownFill /></a>
    </aside>
  )
}

export default Sidebar;