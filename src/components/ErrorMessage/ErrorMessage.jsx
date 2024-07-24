import style from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <p className={style.errorText}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};

export default ErrorMessage;
