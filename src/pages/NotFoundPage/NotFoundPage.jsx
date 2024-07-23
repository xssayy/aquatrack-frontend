import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
    <div className={style.notFoundPageContainer}>
      <h2 className={style.notFoundPageTitle}>
        Oops, this page is not found
      </h2>
      <Link to="/" className={style.notFoundPageBtn}>
        Home
      </Link>
    </div>
    </div>
  );
};

export default NotFoundPage;
