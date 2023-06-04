import styles from './ContactForm.module.scss'

const ContactForm = () => {
    const submitHandler = () => {
      alert('soGoood');
    };
  
    return (
        <div className={styles.ContactForm}>
                <p>Оставьте свой номер, чтобы получить
                     консультацию <br>
                     </br>или записаться на ближайший тур 
                     <b>
                     {' '} 06.06.2020
                     </b>
                </p>
      <form  action="" onSubmit={submitHandler}>
        
        <input
          type="tel"
          id="phone"
          name="phone"

          pattern="\+7 \([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="+7 (___)-___-__-__"
          required
        />
        <button type="submit">зписаться</button>
      </form>
        </div>
    );
  };
  
  export default ContactForm;