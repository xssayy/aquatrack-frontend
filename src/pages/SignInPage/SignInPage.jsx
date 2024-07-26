import SignInForm from '../../components/SignInForm/SignInForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import DocTitle from '../../components/DocTitle';
import style from './SignInPage.module.css';

const SingInPage = () => {
  return (
    <Container>
      <DocTitle>SignIn</DocTitle>
      <SignInForm />
      <div className={style.hidenSection}>
        <AdvantagesSection />
      </div>
    </Container>
  );
};

export default SingInPage;
