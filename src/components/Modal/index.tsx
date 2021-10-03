import React, {useEffect, useState } from 'react';
import ReactModal from 'react-modal';

export const Modal: React.FC = ({ openModal, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState(openModal);


    function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setModalStatus(openModal);
  }, [openModal]);

  
    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={closeModal}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );





    

};

export default Modal;
