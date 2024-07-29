const Icon = ({ id, width, height, className = '', fillColor }) => {
  return (
    <svg
      className={`${className}`}
      style={{ background: 'transparent' }}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use
        style={{ fill: `${fillColor}` }}
        href={`/sprite.svg#icon-${id}`}
      ></use>
    </svg>
  );
};

export default Icon;
