import React from 'react';
import ProjectsCards from '../../Components/Projects-cards/ProjectsCards';
import CardsContextChildren from '../../Context/CardsContext';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { BiArrowFromRight } from 'react-icons/bi';
import './projects.scss';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <CardsContextChildren>
        <div className='projects'>
          <h2>projetos</h2>
          <Sidebar />
          <ProjectsCards />
          <Link to='/'>
            <div className='back-btn'>
              <BiArrowFromRight /> <p>Voltar</p>
            </div>
          </Link>
        </div>
    </CardsContextChildren>
  )
}

export default Projects;