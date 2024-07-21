import { useDispatch, useSelector } from 'react-redux';
import css from '../AdvantagesSection/AdvantagesSection.module.css';
import boy from '../../aces/img/boy.png';
import girl1 from '../../aces/img/girl1.png';
import girl2 from '../../aces/img/girl2 (1).png';
// import { useEffect } from 'react';
export const AdvantagesSection = () => {
  const dispatch = useDispatch();
  const userCount = useSelector((state)=>state.user.count);
  const todaySummeryWater = useSelector((state)=>state.water.todaySummerywater);

// userEffect dopusaty
return (
<div className={css.section}>
<div className={css.sectionBox}>
<p className={css.sectionsTextLeterss}>
<span className={css.span}>{todaySummeryWater} L </span>
of water drink today
</p>
</div>
<div className={css.buttonBox}>
  <ul className={css.buttonListImg}>
<li className={css.buttonListImgItem}>
<img className={css.buttonListImgItemImg} src={girl1} alt="girl1"/>
</li>
<li className={css.buttonListImgItem}>
<img className={css.buttonListImgItemImg} src={boy} alt="boy1"/>
</li>
<li className={css.buttonListImgItem}>
<img className={css.buttonListImgItemImg} src={girl2} alt="girl2"/>
</li>
  </ul>
<p className={css.sectionsTextLeters}>
Our <span className={css.span}>{userCount}</span> happy customers
</p>
</div>
<div className={css.group}>
  <ul className={css.groupList}>
<li className={css.groupListItem}>
<div className={css.ellipse}></div>
<p className={css.groupListItemText}>
Habit drive
</p>
</li>
<li className={css.groupListItem}>
<p className={css.groupListItemTextBlack }>
Viev statistics
</p>
</li>
<li className={css.groupListItem}>
<p className={css.groupListItemTextBlack}>
Personal rate setting
</p>
</li>
  </ul>
</div>
</div>
);
}
;
