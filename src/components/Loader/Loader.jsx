import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#DCF9DD', '#E8FEE9', '#9BE1A0', '#88CC8D', '#76B87B']}
    />
  );
};

export default Loader;
