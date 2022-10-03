import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiSass} from 'react-icons/di'
import {SiTailwindcss, SiStyledcomponents} from 'react-icons/si'
import './technologiescontainer.scss'

function TechnologiesContainer() {

  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "tailwind", name: "TailWind", icon: <SiTailwindcss /> },
    { id: "styled", name: "Styled-Components", icon: <SiStyledcomponents /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className='technology-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eum!</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer