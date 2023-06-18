
import styles from './TourGalery.module.scss'
import ContactForm from '../../common/ConactForm/ContactForm'
import galery1 from '../../../assets/img/TourPage/Galery/galery1.jpg'
import galery2 from '../../../assets/img/TourPage/Galery/galery2.jpg'
import galery3 from '../../../assets/img/TourPage/Galery/galery3.jpg'
import galery4 from '../../../assets/img/TourPage/Galery/galery4.jpg'
const TourGalery=()=>{
    return(
        <div className={styles.Galery}>
 <div className={styles.Galery__item__title}>Запечатли невероятные эмоции на всю жизнь</div>
 <div className={styles.Galery__item__item1}>
   
    <ContactForm text={ <p className={styles.Galery__formText}>
        Все ваши эмоции запечатлит профессиональный фотограф. Хочешь получить убойный
         контент в свои соц. сети? Оставь заявку и мы расскажем как...</p>}/></div>
  <div className={styles.Galery__item__item2}><img src={galery1} alt="" /></div>
  <div className={styles.Galery__item__item3}><img src={galery2} alt="" /></div>
  <div className={styles.Galery__item__item4}><img src={galery3} alt="" /></div>
  <div className={styles.Galery__item__item5}><img src={galery4} alt="" /></div>

        </div>
    )
}
export default TourGalery