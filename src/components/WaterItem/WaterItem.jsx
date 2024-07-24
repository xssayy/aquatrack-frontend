
import css from "./WaterItem.module.css"
import ModalWindow from "components/ModalWindow/ModalWindow";
import { useState } from "react";
import DeleteWaterModal from "components/DeleteWaterModal/DeleteWaterModal";
import WaterModal from "components/WaterModal/WaterModal";
import Icon from "components/Icon/Icon";

const WaterItem = ({water}) => {

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
    <div className={css.item}>
      <Icon id="water-glass" className={css.iconGlass}/>
      <div className={css.water}>
        <p className={css.volume}>{`${water.amount}ml`}</p>
        <p className={css.time}>{`${water.time}`}</p>
      </div>
      <div className={css.edit}>
        <button onClick={handleEdit} className={css.btnEdit}><Icon id="edit" width="16" height="16"/></button>
        <button onClick={handleDelete} className={css.btnTrash}><Icon id="trash" width="16" height="16"/></button>
      </div>
      {isDeleteModalOpen && (
        <ModalWindow onCloseModal={handleCloseDeleteModal} modalIsOpen={isDeleteModalOpen}>
          <DeleteWaterModal
          />
        </ModalWindow>
      )}
            {isEditModalOpen && (
        <ModalWindow onCloseModal={handleCloseEditModal} modalIsOpen={isEditModalOpen}>
          <WaterModal
            type="edit"
            initialData={{ amount: `${water.amount}`, time: `${water.time}` }}
          />
        </ModalWindow>
      )}
    </div>
  );
};

export default WaterItem;


// const Contact = ({ contact }) => {
//   const { id, name, number } = contact;
//   const dispatch = useDispatch()

//   const handleDeleteContact = () => {
//     dispatch(deleteContact(id));
//   }

//   return (
//     <div className={css.item}>
//       <div>
//         <p className={css.iconName}><BsFillPersonFill size={20}/> {name}</p>
//         <p><BsFillTelephoneFill /> {number}</p>
//       </div>
//       <button className={css.btn} onClick={handleDeleteContact}>Delete</button>

//     </div>
//   )
// }

// export default Contact;