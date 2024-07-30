import css from '../AdvantagesSection/AdvantagesSection.module.css';

import firstCostomerMobile from '../../img/welcomePageImg/customer1-phone.png';
import secondCustomerMobile from '../../img/welcomePageImg/customer2-phone.png';
import thirdCustomerMobile from '../../img/welcomePageImg/customer3-phone.png';

import firstCostomerMobile2x from '../../img/welcomePageImg/customer1-phone-2x.png';
import secondCustomerMobile2x from '../../img/welcomePageImg/customer2-phone-2x.png';
import thirdCustomerMobile2x from '../../img/welcomePageImg/customer3-phone-2x.png';

import firstCostomer from '../../img/welcomePageImg/customer1-tab-desc.png';
import secondCustomer from '../../img/welcomePageImg/customer2-tab-desc.png';
import thirdCustomer from '../../img/welcomePageImg/customer3-tab-desc.png';

import firstCostomer2x from '../../img/welcomePageImg/customer1-tab-desc-2x.png';
import secondCustomer2x from '../../img/welcomePageImg/customer2-tab-desc-2x.png';
import thirdCustomer2x from '../../img/welcomePageImg/customer3-tab-desc-2x.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsersCount } from '../../redux/user/operations';
import { selectAllUsersCount } from '../../redux/user/selectors';

const AdvantagesSection = () => {
  const dispatch = useDispatch();
  const allUsersCount = useSelector(selectAllUsersCount);

  useEffect(() => {
    dispatch(getAllUsersCount());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <div className={css.customersBox}>
        <div className={css.customersContainer}>
          <picture className={css.firstContainer}>
            <source
              srcSet={`${firstCostomerMobile} 1x, ${firstCostomerMobile2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${firstCostomer} 1x, ${firstCostomer2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              className={`${css.pictureImage}`}
              src={firstCostomer}
              alt="firstCustomer"
              loading="lazy"
            />
          </picture>
          <picture className={css.secondContainer}>
            <source
              srcSet={`${secondCustomerMobile} 1x, ${secondCustomerMobile2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${secondCustomer} 1x, ${secondCustomer2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              className={`${css.pictureImage}`}
              src={secondCustomer}
              alt="secondCustomer"
              loading="lazy"
            />
          </picture>
          <picture className={css.thirdContainer}>
            <source
              srcSet={`${thirdCustomerMobile} 1x, ${thirdCustomerMobile2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${thirdCustomer} 1x, ${thirdCustomer2x} 2x`}
              media="(min-width: 768px)"
            />
            <img
              className={`${css.pictureImage}`}
              src={thirdCustomer}
              alt="thirdCustomer"
              loading="lazy"
            />
          </picture>
        </div>
        <p className={css.sectionsTextLeters}>
          Our <span className={css.span}>{allUsersCount} happy</span> <br />{' '}
          customers
        </p>
      </div>
      <div className={css.group}>
        <ul className={css.groupList}>
          <li className={css.groupListItem}>
            <div className={css.ellipse}></div>
            <p className={css.groupListItemText}>Habit drive</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlack}>View statistics</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlack}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdvantagesSection;
