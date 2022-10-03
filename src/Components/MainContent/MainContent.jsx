import AboutContainer from '../About/AboutContainer';
import TechnologiesContainer from '../Technologies/TechnologiesContainer';
import ProjectsContainer from '../Projects/ProjectsContainer';

import './maincontent.scss'

function MainContent() {
  return (
    <div className='main-content'>
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
    </div>
  )
}

export default MainContent;