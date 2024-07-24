import WaterMainInfo from 'components/waterMainInfo/WaterMainInfo';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';

import { Container } from 'components/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default HomePage;
