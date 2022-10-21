import React, { useContext } from 'react';
import { CardsContext } from '../../Context/CardsContext';
import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai'
import './projectcards.scss';

function ProjectsCards() {
  Modal.setAppElement('#root');

  const {projects, modalIsOpen, openModal, closeModal, modalItem } = useContext(CardsContext)

  return (
    <div className='projects-cards'>
      {projects.map(project => (<div key={project.name} className='card'>
        <img src={project.img} alt={project.name} />
        <div className='info'>
          <h3>{project.name}</h3>
          <button className='btn' onClick={() => openModal(project)}>Ver Projeto</button>
        </div>
      </div>))}
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName='outside-modal'
      className='modal-content'
      >
        {modalItem.map(item => (<div key={item.name} className='content'>
          <AiFillCloseCircle className='close-btn' onClick={closeModal} />
          <img src={item.img} alt={item.name} />
          <div className='btns'>
            <a target="_blank" href={item.linkrepo}>Código</a>
            <a target="_blank" href={item.linkdemo}>Demo</a>
          </div>
        </div>))}
      </Modal>
    </div>
  )
}

export default ProjectsCards;