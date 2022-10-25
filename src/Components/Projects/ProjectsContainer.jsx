import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2 className='title'>Projetos</h2>
      <p>Separei alguns dos meus projetos para te mostrar. Neles coloco em prática meus conhecimentos nas tecnologias que domino.</p>
      <Link style={{'textDecoration': 'none', marginTop: '20px'}} to='/projetos'><a className='btn' href="#">Ver Projetos</a></Link>
    </section>
  )
}

export default ProjectsContainer;