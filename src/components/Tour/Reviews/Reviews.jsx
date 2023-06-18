import React from 'react';
import styles from './Reviews.module.scss'

const TourReviews = () => {
  return (<>
      <h1>Наши отзывы</h1>
    <div className={styles.Review} >
      <div className={styles.Review__item}>
        <iframe
        className={styles.Review__video}
          width="300"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video 1"
        ></iframe>
        <div className={styles.Review__description}>
          <h5 className={styles.Review__description__name}>Вован</h5>
        <p className={styles.Review__description__sity}>г. Пенза</p>
        <p className={styles.Review__description__date}>участник похода <b>21.06.2023</b></p>
        </div>
      </div>
      <div className={styles.Review__item}>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video 2"
        ></iframe>
         <div className={styles.Review__description}>
          <h5 className={styles.Review__description__name}>Вован</h5>
        <p className={styles.Review__description__sity}>г. Пенза</p>
        <p className={styles.Review__description__date}>участник похода <b>21.06.2023</b></p>
        </div>
      </div>
      <div className={styles.Review__item}>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video 3"
        ></iframe>
         <div className={styles.Review__description}>
          <h5 className={styles.Review__description__name}>Вован</h5>
        <p className={styles.Review__description__sity}>г. Пенза</p>
        <p className={styles.Review__description__date}>участник похода <b>21.06.2023</b></p>
        </div>
      </div>
      <div className={styles.Review__item}>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video 4"
        ></iframe>
        <div className={styles.Review__description}>
          <h5 className={styles.Review__description__name}>Вован</h5>
        <p className={styles.Review__description__sity}>г. Пенза</p>
        <p className={styles.Review__description__date}>участник похода 21.06.2023</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TourReviews;