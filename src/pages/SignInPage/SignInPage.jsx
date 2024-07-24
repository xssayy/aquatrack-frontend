import React from 'react';
import SignInForm from 'components/SignInForm/SignInForm';
import { AdvantagesSection } from 'components/AdvantagesSection/AdvantagesSection';
import { Container } from 'components/Container/Container';

const SingInPage = () => {
  return (
    <Container>
      <SignInForm />
      <AdvantagesSection />
    </Container>
  );
};

export default SingInPage;
