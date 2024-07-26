import WaterMainInfo from '../../components/waterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

import Container from '../../components/Container/Container';
import DocTitle from '../../components/DocTitle';
const HomePage = () => {
  return (
    <Container>
      <DocTitle>Home</DocTitle>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default HomePage;
