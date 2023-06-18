import styles from './TourRemember.module.scss'
import img1 from '../../../assets/img/TourPage/TourRemember/img1.png'
import img2 from '../../../assets/img/TourPage/TourRemember/img2.jpg'
import {GiMountainCave, GiBearHead, GiWhaleTail, GiBasket} from 'react-icons/gi'
import {LuTent} from 'react-icons/lu' 
import {MdEmojiNature} from 'react-icons/md'
import { useState } from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


const TourRemember=()=>{
  

  const IconsList=[
    {icon: <GiMountainCave size={"40px"} color='#F2931D' />, Text:'Невероятные пейзажи'},
    {icon: <GiBearHead size={"40px"} color='#F2931D'/>, Text:'дикие животные'},
    {icon: <GiWhaleTail size={"40px"} color='#F2931D'/>, Text:'мощь океана'},
    {icon: <GiBasket size={"40px"} color='#F2931D' />, Text:'натуральные морепродукты и красная икра'},
    {icon: <LuTent size={"40px"} color='#F2931D'/>, Text:'кемпинг'},
    {icon: <MdEmojiNature size={"40px"} color='#F2931D' />, Text:'невероятные эмоции'},
  ]
     const [currentImageIndex, setCurrentImageIndex] = useState(0);
   
     const images = [img1, img2, img1]; // add your images here
   
     const handlePrevClick = () => {
       setCurrentImageIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
       );
     };
   
     const handleNextClick = () => {
       setCurrentImageIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
       );
     };
   
     return (
       <div className={styles.TourRemember}>
         <div className={styles.TourRemember__content}>
           <h1>Вы запомните это путешествие <br /> на всю жизнь</h1>
           <ul className={styles.TourRemember__List}>
          {IconsList.map((item, index)=>{
            return <li key={index} className={styles.TourRemember__List_item}>
              {item.icon} 
             <span> {item.Text} </span>
            </li>
          })}
           </ul>
           
           </div>
           <div className={styles.TourRemember__slider}>
             <img src={images[currentImageIndex]} alt="" />
             <div className={styles.TourRemember__slider__buttons}>
               <button onClick={handlePrevClick}>
               <BsArrowLeftCircle size={'40px'} color='white'/>
               </button>
               <button onClick={handleNextClick}><BsArrowRightCircle size={'40px'} color='white'/> </button>
             </div>
           </div>
         
       </div>
     );
   };
   
   export default TourRemember;