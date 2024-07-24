import css from '../AdvantagesSection/AdvantagesSection.module.css';
import boy from '../../public/welcomePageImg/boy.png';
import girl2 from '../../public/welcomePageImg/girl1.png';
import girl1 from '../../public/welcomePageImg/girl2 (1).png';

export const AdvantagesSection = () => {
  return (
    <div className={css.section}>
      <div className={css.buttonBox}>
        <div className={css.containers}>
          <picture className={css.pictureContainer1}>
            <img
              className={`${css.pictureImage} ${css.image1}`}
              src={girl1}
              alt="girl1"
            />
          </picture>
          <picture className={css.pictureContainer2}>
            <div className={css.pic}>
              <img
                className={`${css.pictureImage} ${css.image2}`}
                src={boy}
                alt="boy"
              />
            </div>
          </picture>
          <picture className={css.pictureContainer3}>
            <img
              className={`${css.pictureImage} ${css.image3}`}
              src={girl2}
              alt="girl2"
            />
          </picture>
        </div>
        <p className={css.sectionsTextLeters}>
          Our <span className={css.span}>happy</span> <br /> customers
        </p>
      </div>
      <div className={css.group}>
        <ul className={css.groupList}>
          <li className={css.groupListItem}>
            <div className={css.ellipse}></div>
            <p className={css.groupListItemText}>Habit drive</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlack}>Viev statistics</p>
          </li>
          <li className={css.groupListItem}>
            <p className={css.groupListItemTextBlacks}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
