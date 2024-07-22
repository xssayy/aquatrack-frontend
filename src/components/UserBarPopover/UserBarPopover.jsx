import { useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';
import Icon from 'components/Icon/Icon';

import css from './UserBarPopover.module.css';

const UserBarPopover = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.userBarPopoverContainer}>
      <button type="button" onClick={openModal} className={css.settings}>
        <Icon
          id={'settings'}
          width={'16px'}
          height={'16px'}
          fillColor={'#323f47'}
          className={css.iconSettings}
        />
        Setting
      </button>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
      ></ModalWindow>
      <button type="button" onClick={openModal} className={css.logOut}>
        <Icon
          id={'log-out'}
          width={'16px'}
          height={'16px'}
          fillColor={'rgba(50, 63, 71, 0.4)'}
          className={css.iconLogOut}
        />
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
