const Icon = ({ id, width, height, className = '' }) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use href={`${process.env.PUBLIC_URL}/sprite.svg#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
