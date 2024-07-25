import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import { AdvantagesSection } from 'components/AdvantagesSection/AdvantagesSection';
import { Container } from 'components/Container/Container';
import style from './SignInPage.module.css';
import DocTitle from 'components/DocTitle';

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
