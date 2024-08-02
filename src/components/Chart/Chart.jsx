import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import {
  selectChosenDate,
  selectMonthly,
  selectTodayWaterAmount,
} from '../../redux/water/selectors';
import { useEffect } from 'react';
import { getMonthly } from '../../redux/water/operations';
import { getUserInfo } from '../../redux/user/operations';
import { selectWaterDailyNorma } from '../../redux/user/selectors';

export const Chart = () => {
  const dispatch = useDispatch();
  const waterMonth = useSelector(selectMonthly);
  const chosenDate = useSelector(selectChosenDate);
  const dailyAmount = useSelector(selectTodayWaterAmount);
  const dailyNorma = useSelector(selectWaterDailyNorma);

  useEffect(() => {
    const year = new Date(chosenDate).getFullYear();
    let month = new Date(chosenDate).getMonth() + 1;

    //приводи місяць до формату "06" замість "6 "
    month = month < 10 ? `0${month}` : month;

    dispatch(getMonthly(`${year}-${month}`));
    dispatch(getUserInfo());
  }, [dispatch, chosenDate]);

  const data = waterMonth
    ? waterMonth.map(elem => {
        const [date] = elem.time.split('T');
        const [, , day] = date.split('-');
        return {
          date: day,
          amount: parseInt(elem.amount),
        };
      })
    : [];

  const isMobile = useMediaQuery({
    query: ' (max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const heightValue = 300;
  const widthValue = isMobile ? 300 : isTablet ? 640 : 608;
  const fontSizeValue = isMobile ? 14 : isTablet ? 15 : 15;
  const intervalValue = isMobile ? 4 : isTablet ? 3 : 2;

  return (
    <AreaChart
      width={widthValue}
      height={heightValue}
      data={data}
      margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>

      <XAxis
        dataKey="date"
        label={{ value: 'Day', position: 'insideBottomRight', offset: -5 }}
      />
      <YAxis
        domain={[0, dailyNorma * 1000]}
        label={{ value: 'ml', angle: -90, position: 'insideLeft', offset: 0 }}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="amount"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};
