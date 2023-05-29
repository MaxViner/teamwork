import { BLOG_ROUTE,TOUR_ROUTE,
    REVIEW_ROUTE,CONTACT_US_ROUTE,
    ABOUT_US_ROUTE, HOME_ROUTE } from '../../utils/routes';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss'
import LapkiVtapki from '../../accets/img/kiskisLapka.png'
const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.Header}>

   
        <div className={styles.Header__logo}>
            <div className={styles.Header__logo__lapki}>
                <img src={LapkiVtapki} id='lapka1' alt="" />
                <img src={LapkiVtapki} id='lapka2' alt="" />
            </div>
            <h1 className={styles.Header__logo__text}>
                BIG FOOT:P
            </h1>
        </div>
        <div className={styles.Header__links}>
      <ul>
        <li><Link to={BLOG_ROUTE}>Блог</Link></li>
        <li><Link to={TOUR_ROUTE}>Туры</Link></li>
        <li><Link to={REVIEW_ROUTE}>Отзывы</Link></li>
        <li><Link to={CONTACT_US_ROUTE}>Контакты</Link></li>
        <li><Link to={ABOUT_US_ROUTE}>О нас</Link></li>
        {location.pathname !== HOME_ROUTE && (
          <li><Link to={HOME_ROUTE}>Главная</Link></li>
        )}

      </ul>
        </div>
        <div className={styles.Header__contacts}>
           <h4 className={styles.Header__contacts__number}>
             +7 (999) 999 99 99
             </h4> 
           <p className={styles.Header__contacts__descr}> 
              Заказать звонок
            </p>
        </div>
    

    </div>
  );
};

export default Header;