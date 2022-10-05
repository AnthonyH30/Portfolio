import { createContext, useState } from "react";

export const CardsContext = createContext()

 const CardsContextChildren = ({children}) => {

  const [modalItem, setModalItem] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      name: 'SelfCar',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG',
      linkrepo:'',
      linkprojeto: ''
    },
    {
      name: 'SelfCa',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG'
    },
    {
      name: 'SelfC',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG'
    },
    {
      name: 'Self',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG'
    },
    {
      name: 'Sel',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG'
    },
    {
      name: 'Se',
      img: 'https://cdn.discordapp.com/attachments/334770078069293056/1026898037160816761/selfcare-print.PNG'
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