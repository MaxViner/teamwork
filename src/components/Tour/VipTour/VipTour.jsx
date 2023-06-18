import helic from '../../../assets/img/TourPage/VipTour/helic.png'
import chair from '../../../assets/img/TourPage/VipTour/chair.png'
import stars from '../../../assets/img/TourPage/VipTour/stars.png'
import targ from '../../../assets/img/TourPage/VipTour/targ.png'
import zalypa from '../../../assets/img/TourPage/VipTour/zalypa.png'
import vipTourImg from '../../../assets/img/TourPage/VipTour/vipTourImg.png'
import styles from './VipTour.module.scss'

const VipTour=()=>{

    const List=[
        {img:helic, text:"Комфортная транспортировка"},
        {img:targ, text:"+ 7 дополнительных локаций"},
        {img:chair, text:"Преимущество 4"},
        {img:zalypa, text:"Повар"},
    ]

    return( <div className={styles.VipTour}>
        <div  className={styles.VipTour__img}>
        <img src={vipTourImg} alt="" />
        </div >
        <div className={styles.VipTour__content}> 
            <h1>
                Vip тур 
                <img src={stars} alt="" />
            </h1>
 
            <p>
            Это супер VIP тур на Камчатку. Здесь лакшери описание,
             и объяснение почему, вы должна купить именно VIP билет.
              (Если вы не нищеброд, разумеется)
            </p>
            <div className={styles.VipTour__List}>
                {List.map((item)=>{
                    return <div className={styles.VipTour__List__item}>
                    <img src={item.img} alt="" />
                    <p>{item.text}</p>
                    </div>
                }
                    )}
            </div>
            <button >
            Получить VIP привелегии
                            </button>
        </div>
    </div>
    )
}


export default VipTour