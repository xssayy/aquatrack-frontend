// import { useState } from "react";
import css from "./AddWaterBtn.module.css"

import Icon from "components/shared/Icon";

const AddWaterBtn = () => {


  return (
    <div className={css.addBtn}>
      <button className={css.btn}>X</button>
      <p className={css.text}>Add water</p>
      {/* {isModalOpen && <WaterModal />} */}
    </div>
  );
};

export default AddWaterBtn;
