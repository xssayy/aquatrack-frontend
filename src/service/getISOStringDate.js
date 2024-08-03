import { formatISO } from 'date-fns';

export const getISOStringDate = (date = new Date()) => {
  const isoString = formatISO(date, { representation: 'complete' });
  console.log(isoString);
  return isoString;
};
