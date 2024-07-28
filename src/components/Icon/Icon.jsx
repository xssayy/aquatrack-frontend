const Icon = ({ id, width, height, className = '', fillColor }) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        style={{ fill: `${fillColor}` }}
        href={`../../../public/sprite.svg#icon-${id}`}
      ></use>
    </svg>
  );
};

export default Icon;
