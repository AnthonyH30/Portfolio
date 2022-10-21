import { createContext, useState } from "react";

export const CardsContext = createContext()

 const CardsContextChildren = ({children}) => {

  const [modalItem, setModalItem] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      name: 'SelfCare',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG',
      linkrepo: 'https://github.com/AnthonyH30/Selfcare-React-version',
      linkdemo: 'https://selfcare-store-reactjs.netlify.app'
    },
    {
      name: 'What to Watch',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032029228541157487/watowatch.PNG',
      linkrepo: 'https://github.com/AnthonyH30/whatowatch',
      linkdemo: 'https://anthonyh30.github.io/whatowatch/'
    },
    {
      name: 'Login Page',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032029510817828965/login.PNG',
      linkrepo: 'https://github.com/AnthonyH30/Login-Register',
      linkdemo: 'https://anthonyh30.github.io/Login-Register/'
    },
    {
      name: 'Numeração de Anel',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032029822014214194/anel.PNG',
      linkrepo: 'https://github.com/AnthonyH30/numero-de-anel',
      linkdemo: 'https://anthonyh30.github.io/numero-de-anel/'
    },
    {
      name: 'ToDoList',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032030622220296282/task.png',
      linkrepo: 'https://github.com/AnthonyH30/ToDoList',
      linkdemo: 'https://ci23uv.csb.app/'
    },
    {
      name: 'CountDown',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032030953700335626/countdown.PNG',
      linkrepo: 'https://github.com/AnthonyH30/Countdown',
      linkdemo: 'https://anthonyh30.github.io/Countdown/'
    },
    {
      name: 'Objetivos Sustentáveis',
      img: 'https://cdn.discordapp.com/attachments/773364102071975976/1032028380276731965/onu.PNG',
      linkrepo: 'https://github.com/AnthonyH30/projeto-onu',
      linkdemo: 'https://desenvolvimentosustentavel.netlify.app'
    }
  ]);

  function openModal(project){
    setModalIsOpen(true)
    setModalItem([project])
  }

  function closeModal(){
    setModalIsOpen(false)
  }

      return(
        <CardsContext.Provider value={{ projects, setProjects, modalIsOpen, setModalIsOpen, openModal, closeModal, modalItem, setModalItem }}>
            {children}
        </CardsContext.Provider>
    )
}

export default CardsContextChildren;