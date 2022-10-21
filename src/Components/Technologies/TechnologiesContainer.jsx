import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiSass} from 'react-icons/di'
import {SiTailwindcss, SiStyledcomponents, SiTypescript} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import './technologiescontainer.scss'

function TechnologiesContainer() {

  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "tailwind", name: "TailWind", icon: <SiTailwindcss /> },
    { id: "styled", name: "Styled-Components", icon: <SiStyledcomponents /> },
    { id: "TypeScript", name: "TypeScript", icon: <SiTypescript /> },
    { id: "react", name: "React Native", icon: <TbBrandReactNative /> },
    { id: "react", name: "React", icon: <DiReact /> }
  ];

  return (
    <section className="technologies-container">
      <h2 className='title'>Tecnologias</h2>
      <div className='technology-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
              <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer