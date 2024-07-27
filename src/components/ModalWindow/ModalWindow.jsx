import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon';
import { useEffect } from 'react';

Modal.setAppElement('#root');

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(style.modalOpen);
    } else {
      document.body.classList.remove(style.modalOpen);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
        },
      }}
    >
      <div className={style.modalContainer}>
        <button type="button" onClick={onCloseModal} className={style.btnClose}>
          <Icon id="x" width="24" height="24" />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
