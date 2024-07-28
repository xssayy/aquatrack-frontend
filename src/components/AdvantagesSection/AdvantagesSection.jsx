import css from '../AdvantagesSection/AdvantagesSection.module.css';
import firstCostomer from '../../img/welcomePageImg/customer1-tab-desc-2x.png';
import secondCustomer from '../../img/welcomePageImg/customer2-tab-desc-2x.png';
import thirdCustomer from '../../img/welcomePageImg/customer3-tab-desc-2x.png';
import { useTranslation } from 'react-i18next';

const AdvantagesSection = () => {
  const { t } = useTranslation();
  return (
    <div className={css.section}>
      <div className={css.customersBox}>
        <div className={css.customersContainer}>
          <picture className={css.firstContainer}>
            <img
              className={`${css.pictureImage}`}
              src={firstCostomer}
              alt="firstCostomer"
            />
          </picture>
          <picture className={css.secondContainer}>
            <img
              className={`${css.pictureImage}`}
              src={secondCustomer}
              alt="secondCustomer"
            />
          </picture>
          <picture className={css.thirdContainer}>
            <img
              className={`${css.pictureImage}`}
              src={thirdCustomer}
              alt="thirdCustomer"
            />
          </picture>
        </div>
        <p className={css.sectionsTextLeters}>
          {t('Our')} <span className={css.span}>{t('happy')}</span> <br />{' '}
          {t('customers')}
        </p>
      </div>
      <div className={css.group}>
        <ul className={css.groupList}>
          <li className={css.groupListItem}>
            <div className={css.ellipse}></div>
            <p className={css.groupListItemText}>{t('Habit drive')}</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlack}>{t('View statistics')}</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlack}>
              {t('Personal rate setting')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdvantagesSection;
