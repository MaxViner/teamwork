import styles from './TourHead.module.scss'
import { FaMountain } from 'react-icons/fa';
import { GiMountaintop } from 'react-icons/gi';
import { GiMountainRoad } from 'react-icons/gi';
import { GiWolfHowl } from 'react-icons/gi';
import continent from '../../../accets/img/TourPage/TourHead/continent.svg'
import ContactForm from '../../common/ConractForm/ContactForm';
import frag1 from '../../../accets/img/TourPage/TourHead/frag1.png'
import frag2 from '../../../accets/img/TourPage/TourHead/frag2.png'
 
const TourHead = () => {
  const ListItems = [
    {
      img: <GiMountainRoad size={50} opacity={0.8}/>,
      text: 'горы'
    },
    {
      img: <GiWolfHowl size={50} opacity={0.8}/>,
      text: 'дикие животные'
    },
    {
      img: <FaMountain size={50} opacity={0.8}/>,
      text: 'красная гора'
    },
    {
      img: <GiMountaintop size={50} opacity={0.8}/>,
      text: 'рафтинг'
    }
  ]
   return (
    <div className={styles.TourHead}>
        <div className={styles.TourHead__content}>

      <h1>
        Организуем незабываемый <br/> отдых на{' '}
        <span>
          Камчатке
        </span>
      </h1>
      <p>
        Создадим самые запоминающиеся <br></br>
        впечатления в вашей жизни
      </p>
      <div className={styles.TourHead__List}>

       {ListItems.map((item) => (
        <span key={item.text} >
            <div className={styles.TourHead__List__item}>
                {item.img }
                <span>{item.text}</span>

            </div>
        </span>
      ))}
      </div>

      <div className={styles.TourHead__Form}>
      <ContactForm/>

      </div>
     <img src={continent} id={styles.continent} alt="" />
     <img src={frag1} id={styles.frag1} alt="" />
     <img src={frag2} id={styles.frag2} alt="" />
        </div>
    </div>
  )
}
 export default TourHead