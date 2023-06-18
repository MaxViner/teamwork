import styles from './TourList.module.scss'
import listItem1 from '../../../assets/img/TourPage/TourList/listItem1.jpg'
import listItem2 from '../../../assets/img/TourPage/TourList/listItem2.jpg'
import listItem3 from '../../../assets/img/TourPage/TourList/listItem3.jpg'
import listItem4 from '../../../assets/img/TourPage/TourList/listItem4.jpg'
import yellow from '../../../assets/img/TourPage/TourList/yellow.png'
import white from '../../../assets/img/TourPage/TourList/white.svg'
const TourList=()=>{
    const List=[
        {
            img: listItem1,
            price:"139 000p.",
            dates: ['14.07-22.07', '14.07-22.07','14.07-22.07','14.07-22.07'],
            title:'Девятидневный тур “Увидеть максимум”',
            desr: 'Тур организован таким образом, чтобы за короткое время увидеть максимум!',
            difficult: [yellow,yellow,yellow,white,white],
            comfourt: [yellow,yellow,yellow,white,white]
    },
    {
        img: listItem2,
        price:"79 000p.",
        dates: ['14.07-22.07', '14.07-22.07','14.07-22.07','14.07-22.07'],
        title:'Одиннадцатидневный тур «Не пеший трип»',
        desr: 'В этом туре минимум пеших прогулок, мы объедем все знаменитые места Камчатки',
        difficult: [yellow,yellow,yellow,white,white],
        comfourt: [yellow,yellow,yellow,white,white]
},
{
    img: listItem3,
    price:"79 000p.",
    dates: ['14.07-22.07', '14.07-22.07','14.07-22.07','14.07-22.07'],
    title:'Одиннадцатидневный тур «Не пеший трип»',
    desr: 'Тур организован таким образом, чтобы за короткое время увидеть максимум!',
    difficult: [yellow,yellow,yellow,white,white],
    comfourt: [yellow,yellow,yellow,white,white]
},
{
    img: listItem4,
    price:"139 000p.",
    dates: ['14.07-22.07', '14.07-22.07','14.07-22.07','14.07-22.07'],
    title:'Девятидневный тур “Увидеть максимум”',
    desr: 'Тур организован таким образом, чтобы за короткое время увидеть максимум!',
    difficult: [yellow,yellow,yellow,white,white],
    comfourt: [yellow,yellow,yellow,white,white]
},
]
    return( <div className={styles.TourList}>
            {List.map(item=>{
                return  <div className={styles.TourList__item}>
                  <div className={styles.TourList__item_top}>
                    <span className={styles.TourList__price}>
                        {item.price}
                    </span>
                    {<img src={item.img} alt="" />
                    }
                    <span className={styles.TourList__dates}>
                        {item.dates.map(date=>{
                           return  <span className={styles.TourList__date}>
                                {date}
                                </span>
                        })}
                    </span>
                        
                    </div>

                    <div className={styles.TourList__item_bot}>
                        <h2>{item.title}</h2>
                        <p>{item.desr}</p>
                        <p>
                        <span>
                            Сложность:  
                        </span>
                        {item.difficult.map(ball=>{
                           
                           return    <span>
                                 <img src= {ball} alt="" />
                            </span>
                        })}
                        </p>
                            <p>
                                <span>Комфорт       :
                                     </span>
                            {item.comfourt.map(ball=>{
                           return  <span>
                            <img src= {ball} alt="" />
                               
                            </span>
                        })}
                            </p>
                            <br /><br />
                            <button >
                                подробнее
                            </button>
                        </div>

                    </div>
            })}
        </div>
    )
}

export default TourList
