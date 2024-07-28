import { Link } from 'react-router-dom';
import styles from './LogoLink.module.css';

const LogoLink = () => {
  return (
    <Link to="/aquatrack-frontend" className={styles.title}>
      Aquatrack
    </Link>
  );
};

export default LogoLink;
