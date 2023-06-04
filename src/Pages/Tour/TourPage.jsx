import styles from './TourPage.module.scss'
import TourHead from '../../components/Tour/ToutHead/TourHead'
import TourList from '../../components/Tour/TourList/TourList'
const TourPage=()=>{
    return(
        <div className={styles.TourPage}>
            <TourHead></TourHead>
           <TourList/>

        </div>
    )
}


export default TourPage