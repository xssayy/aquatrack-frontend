import { AdvantagesSection } from 'components/AdvantagesSection/AdvantagesSection';
import { Container } from 'components/Container/Container';
import SignUpForm from 'components/SignUpForm/SignUpForm';

import style from './SignUpPage.module.css';

const SignUpPage = () => {
  console.log('qeqeq');
  return (
    <Container>
      <SignUpForm />
      <div className={style.hidenSection}>
        <AdvantagesSection />
      </div>
    </Container>
  );
};

export default SignUpPage;