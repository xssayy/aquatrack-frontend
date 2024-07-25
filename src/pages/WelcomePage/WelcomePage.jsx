import { Container } from 'components/Container/Container.jsx';
import { WelcomeSection } from 'components/WelcomeSection/WelcomeSection.jsx';
import { AdvantagesSection } from 'components/AdvantagesSection/AdvantagesSection.jsx';
import DocTitle from 'components/DocTitle';

const WelcomePage = () => {
  return (
    <Container>
      <DocTitle>Aquatrack</DocTitle>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
};

export default WelcomePage;
