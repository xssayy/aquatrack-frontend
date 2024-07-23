import { Container } from "../components/Container/Container.jsx";
import { AdvantagesSection } from "../components/AdvantagesSection/AdvantagesSection.jsx";
import { WelcomeSection } from "../components/WelcomeSection/WelcomeSection.jsx";
// import { Helmet } from 'react-helmet';

const WelcomePage = () => {

  return (
<Container>
  {/* <Helmet> */}
    <title>Home</title>
  {/* </Helmet> */}
  <WelcomeSection />
  <AdvantagesSection />
</Container>
  );
};

export default WelcomePage;
