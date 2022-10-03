import React from 'react';
import ProjectsCards from '../../Components/Projects-cards/ProjectsCards';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './projects.scss';

function Projects() {
  return (
    <div className='projects'>
        <h2>projetos</h2>
        <Sidebar />
        <ProjectsCards />
    </div>
  )
}

export default Projects;