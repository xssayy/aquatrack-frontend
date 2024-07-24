import { Container } from 'components/Container/Container.jsx';
import { WelcomeSection } from 'components/WelcomeSection/WelcomeSection.jsx';
import { AdvantagesSection } from 'components/AdvantagesSection/AdvantagesSection.jsx';

const WelcomePage = () => {
  return (
    <Container>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
};

export default WelcomePage;
