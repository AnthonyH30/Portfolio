import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../../Img/error.svg'
import './error.scss'

function Error() {
  return (
    <div className='container'>
        <Link to='/'><button>Inicio</button></Link>
        <img src={errorimg} alt="Error 404 Image - page not found" />
    </div>
  )
}

export default Error;