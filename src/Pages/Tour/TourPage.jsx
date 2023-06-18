import styles from './TourPage.module.scss'
import TourHead from '../../components/Tour/ToutHead/TourHead'
import TourList from '../../components/Tour/TourList/TourList'
import VipTour from '../../components/Tour/VipTour/VipTour'
import TourRemember from '../../components/Tour/TourRemember/TourRemember'
import TourErnest from '../../components/Tour/TourEvan/TourEvan'
import TourReviews from '../../components/Tour/Reviews/Reviews'
import TourGalery from '../../components/Tour/Galery/TourGalery'
import Quesions from '../../components/Tour/Quesions/Quesions'
import Board from '../../components/Tour/Board/Board'
import preFooter from '../../assets/img/TourPage/preFooter.jpg'
import Footer from '../../components/Footer/Footer'
const TourPage=()=>{
    return(
        <div className={styles.TourPage}>
            <TourHead></TourHead>
           <TourList/>
           <VipTour/>
            <TourRemember/>
            <TourErnest/>
            <TourReviews/>
            <TourGalery/>
            <Quesions/>
            <Board/>
            <div className={styles.preFooter}
            >
                <img src={preFooter} alt="" />
            <Footer/>
            </div>
        </div>
    )
}


export default TourPage