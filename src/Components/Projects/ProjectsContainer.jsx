import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsContainer() {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa officiis voluptates. Quas nemo ratione provident et placeat maxime exercitationem.</p>
      <Link style={{'textDecoration': 'none'}} to='/projetos'><a className='btn' href="#">Ver Projetos</a></Link>
    </section>
  )
}

export default ProjectsContainer