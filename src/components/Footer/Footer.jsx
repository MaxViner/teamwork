import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom"; 
import styles from "./Footer.module.scss"; 
import logo from "../../assets/img/TourPage/FooterLogo.svg"; 
import {  FaTimes } from 'react-icons/fa';
import menu from '../../assets/img/Header/menu.png'
import { 
  BLOG_ROUTE, 
  TOUR_ROUTE, 
  REVIEW_ROUTE, 
  CONTACT_US_ROUTE, 
  ABOUT_US_ROUTE, 
  HOME_ROUTE, 
} from "../../utils/routes"; 
 
const Footer = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    console.log('cl');
    setShowLinks(!showLinks);
  };

  const handleCloseLinks = () => {
    setShowLinks(false);
  };

 
  return ( 
    <div className={styles.Footer} data-testid="Footer"> 
      <div className={styles.Footer__logo}> 
        <img src={logo} alt="" /> 
      </div> 
      <div className={styles.Footer__links}> 
        <ul> 
          <li> 
            <Link to={BLOG_ROUTE}>Блог</Link> 
          </li> 
          <li> 
            <Link to={TOUR_ROUTE}>Туры</Link> 
          </li> 
          <li> 
            <Link to={REVIEW_ROUTE}>Отзывы</Link> 
          </li> 
          <li> 
            <Link to={CONTACT_US_ROUTE}>Контакты</Link> 
          </li> 
          <li> 
            <Link to={ABOUT_US_ROUTE}>О нас</Link> 
          </li> 
          {location.pathname !== HOME_ROUTE && ( 
            <li> 
              <Link to={HOME_ROUTE}>Главная</Link> 
            </li> 
          )} 
        </ul> 
      </div> 
        <div className={styles.Footer__links__icon} onClick={handleShowLinks}>  
          <img src={menu} alt="" width={"28px"}/>
        </div>
      <div className={styles.Footer__contacts}> 
        <h4 className={styles.Footer__contacts__number}> 
          +7 (999) 999 99 99 
        </h4> 
        <p className={styles.Footer__contacts__descr}>Заказать звонок</p> 
      </div> 
      <div
        className={`${styles.Footer__mobile_links} ${
          showLinks ? styles.show : " "
        }`}
      >
        <div className={styles.Footer__mobile_links__close} onClick={handleCloseLinks}>
          <FaTimes size={"40px"} />
        </div>
        <ul>
          <li>
            <Link to={BLOG_ROUTE} onClick={handleCloseLinks}>Блог</Link>
          </li>
          <li>
            <Link to={TOUR_ROUTE} onClick={handleCloseLinks}>Туры</Link>
          </li>
          <li>
            <Link to={REVIEW_ROUTE} onClick={handleCloseLinks}>Отзывы</Link>
          </li>
          <li>
            <Link to={CONTACT_US_ROUTE} onClick={handleCloseLinks}>Контакты</Link>
          </li>
          <li>
            <Link to={ABOUT_US_ROUTE} onClick={handleCloseLinks}>О нас</Link>
          </li>
          {location.pathname !== HOME_ROUTE && (
            <li>
              <Link to={HOME_ROUTE} onClick={handleCloseLinks}>Главная</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
 
