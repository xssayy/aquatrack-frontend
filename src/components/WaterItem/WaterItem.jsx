import css from './WaterItem.module.css';

import { format } from 'date-fns';
import { useState } from 'react';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../WaterModal/WaterModal';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

const WaterItem = ({ water }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {isLoading && <Loader type="blue" />}

      <div className={css.item}>
        <Icon id="water-glass" className={css.iconGlass} />
        <div className={css.water}>
          <p className={css.volume}>{`${water.amount}ml`}</p>
          <p className={css.time}>{`${format(
            new Date(water?.time.slice(0, -1)),
            'hh:mm a'
          )}`}</p>
        </div>
        <div className={css.edit}>
          <button type="button" onClick={handleEdit} className={css.btnEdit}>
            <Icon id="edit" width="16" height="16" />
          </button>
          <button type="button" onClick={handleDelete} className={css.btnTrash}>
            <Icon id="trash" width="16" height="16" />
          </button>
        </div>

        <DeleteWaterModal
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isOpen={isDeleteModalOpen}
          closeModal={handleCloseDeleteModal}
          id={water._id}
        />

        <WaterModal
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          id={water._id}
          isOpen={isEditModalOpen}
          closeModal={handleCloseEditModal}
          type="edit"
          initialData={{
            amount: water.amount,
            time: format(new Date(water?.time.slice(0, -1)), 'HH:mm'),
          }}
        />
      </div>
    </>
  );
};

export default WaterItem;
