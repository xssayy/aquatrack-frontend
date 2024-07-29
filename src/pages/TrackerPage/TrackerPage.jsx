import WaterMainInfo from '../../components/waterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

import Container from '../../components/Container/Container';
import DocTitle from '../../components/DocTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '../../redux/user/operations';

const TrackerPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserInfo());
    }, [dispatch]);
  
  return (
    <Container>
      <DocTitle>Home</DocTitle>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default TrackerPage;
