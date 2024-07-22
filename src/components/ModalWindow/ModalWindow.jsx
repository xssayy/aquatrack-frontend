import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from 'components/shared/Icon';

Modal.setAppElement('#root');

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
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

// import ModalWindow from "components/ModalWindow/ModalWindow";
// import UserSettingsModal from "components/UserSettingsModal/UserSettingsModal";
// import { useState } from 'react';

// const Component = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     function openModal() {
//       setModalIsOpen(true);
//   }
  
//     function closeModal() {
//       setModalIsOpen(false);
//     }

//   return (
//     <>
//       <button type="button" onClick={openModal}>
//         Open Modal
//       </button>
//       <ModalWindow
//         modalIsOpen={modalIsOpen}
//         onCloseModal={closeModal}
//       >
//         <UserSettingsModal onCloseModal={closeModal} /> or ....
//       </ModalWindow>
//     </>
//   );
// };

// export default WelcomePage;

