import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { Calendar } from '../Calendar/Calendar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MonthInfo = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainWrapper}>
      <div className={css.dateWrapper}>
        <h2 className={css.title}>
          {t('Tracker page.Water detailed info.Month')}
        </h2>

        <CalendarPagination />
      </div>

      <Calendar />
    </div>
  );
};

export default MonthInfo;
