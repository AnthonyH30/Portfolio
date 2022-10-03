import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import './socialnetworks.scss'

function Socialnetworks() {
  
const socialnetworks = [
    { name: 'Linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/anthony-harisson-421b50231/'},
    { name: 'Github', icon: <FaGithub />, link: 'https://github.com/AnthonyH30'},
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/anthony3_0/'}
  ];

  return (
    <div id='social-networks'>
      {socialnetworks.map((network) => (
        <a target="_blank" href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </div>
  )
}

export default Socialnetworks;