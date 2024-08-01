import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ type = 'green' }) => {
  return type === 'blue' ? (
    <div className={css.loaderContainerBlue}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#D6DBDD', '#A8B6B9', '#7B9295', '#4E6D71', '#323F47']}
      />
    </div>
  ) : (
    <div className={css.loaderContainer}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#D6DBDD', '#A8B6B9', '#7B9295', '#4E6D71', '#323F47']}
      />
    </div>
  );
};

export default Loader;
