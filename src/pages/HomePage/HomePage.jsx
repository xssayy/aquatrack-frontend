import DocTitle from '../../components/DocTitle.jsx';
import Container from '../../components/Container/Container.jsx';
import HomeSection from '../../components/HomeSection/HomeSection.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

const WelcomePage = () => {

  
  return (
    <Container>
      <DocTitle>Aquatrack</DocTitle>
      <HomeSection />
      <AdvantagesSection />
    </Container>
  );
};

export default WelcomePage;
