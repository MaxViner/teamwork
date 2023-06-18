import styles from './Board.module.scss'
import BoarImg from '../../../assets/img/TourPage/Board.jpg'
const Board = () => {
    return (
      <div className={styles.Board} >
        <img
          src={BoarImg}
          alt="placeholder"
        >
            </img>
        <form  >
         <b> <h2>Нужно еще больше информации?</h2></b>
          <p>Оставьте заявку, наш менеджер перезвонит вам в течение рабочего дня и ответит на все ваши вопросы</p>
          <input type="text" id="input1" placeholder='ваше имя'/>
          
          <input type="text" id="input2" placeholder='ваш телефон'/>
          <br />
          <button type="submit">Получить консультацию</button>
        </form>
      </div>
    );
  }
   export default Board;