import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';
import Container from '../../components/Container/Container';
import DocTitle from '../../components/DocTitle.jsx';

const NotFoundPage = () => {
  return (
    <Container>
      <DocTitle>NotFound</DocTitle>
      <div className={style.notFoundPageContainer}>
        <h2 className={style.notFoundPageTitle}>
          Oops, this page is not found
        </h2>
        <Link to="/" className={style.notFoundPageBtn}>
          Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
