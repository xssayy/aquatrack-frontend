import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  const handleAddWater = () => {
    console.log('Add water open modal');
  };

  return (
    <div>
      <button
        className={css.addWaterBtn}
        type="button"
        onClick={handleAddWater}
      >
        + Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
