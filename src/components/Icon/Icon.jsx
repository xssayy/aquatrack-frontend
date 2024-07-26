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
        // href={`${process.env.PUBLIC_URL}/sprite.svg#icon-${id}`}
        href={`/sprite.svg#icon-${id}`}
      ></use>
    </svg>
  );
};

export default Icon;
