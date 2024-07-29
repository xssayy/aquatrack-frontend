import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import DocTitle from '../../components/DocTitle';
import style from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <Container>
      <DocTitle>SignUp</DocTitle>
      <SignUpForm />
      <div className={style.hidenSection}>
        <AdvantagesSection />
      </div>
    </Container>
  );
};

export default SignUpPage;
