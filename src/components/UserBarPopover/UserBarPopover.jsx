import { useState } from 'react';
import css from './UserBarPopover.module.css';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const UserBarPopover = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css['user-bar-popover-container']}>
      <button type="button" onClick={openModal} className={css.settings}>
        <svg className={css['icon-setting']}>
          <use href="sprite.svg#icon-settings"></use>
        </svg>
        Setting
      </button>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
      ></ModalWindow>
      <button type="button" onClick={openModal} className={css['log-out']}>
        <svg className={css['icon-log-out']}>
          <use href="sprite.svg#icon-log-out"></use>
        </svg>
        Log out
      </button>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
      ></ModalWindow>
    </div>
  );
};

export default UserBarPopover;
