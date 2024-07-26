import DocTitle from '../../components/DocTitle.jsx';
import Container from '../../components/Container/Container';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

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
