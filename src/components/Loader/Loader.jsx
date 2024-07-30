import { ColorRing } from 'react-loader-spinner';
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#DCF9DD', '#E8FEE9', '#9BE1A0', '#88CC8D', '#76B87B']}
      />
    </div>
  );
};

export default Loader;
