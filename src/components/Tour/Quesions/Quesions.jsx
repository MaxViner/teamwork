
import React, { useState } from 'react';
import Styles from './Quesions.module.scss'
 const Questions = () => {
  
   const titles = [
    { id: 1, title: 'почему муха ползает по потолку и не падает?', text: 'Муха не падает с потолка, потому что она знает, что если упадет, то потеряет свою работу как муха-охранник в этом доме. Поэтому она старается держаться на потолке, чтобы не уволили ее за неграмотность и неопытность в работе.' },
    { id: 2, title: 'почему пингвины не летaют?', text: 'Пингвины не летают, потому что они слишком заняты танцами и не хотят отвлекаться на такие ненужные дела, как летание. Кроме того, у них нет крыльев, которые могли бы помочь им в этом деле, только пушистые перья, которые не очень полезны в воздухе. Но, возможно, если мы дадим пингвинам специальные костюмы-крылья, они смогут научиться летать!' },
    { id: 3, title: 'почему зефир спасет мир', text: 'Конечно, зефир спасет мир! Ведь он содержит в себе уникальные свойства, которые могут убедить людей прекратить все войны и начать жить в мире и гармонии. Кроме того, зефир может использоваться в качестве мощного оружия против инопланетных захватчиков, благодаря своей непредсказуемой природе и способности удивлять всех своим вкусом и ароматом.' },
  ];
  const [selectedTitle, setSelectedTitle] = useState(titles[0].title);
  const [text, setText] = useState(titles[0].text);

   const handleTitleClick = (title) => {
    setSelectedTitle(title);
    setText(getTextForTitle(title));
  };
   const getTextForTitle = (title) => {
    const selectedObject = titles.find((obj) => obj.title === title);
    return selectedObject ? selectedObject.text : '';
  };
   return (
    <div className={Styles.Questions}>
        <h1>У вас еще остались вопросы?</h1>
      <div className={Styles.Questions__container}>
        <div className={Styles.Questions__text}>
        <h3 className={Styles.Questions__title}>{selectedTitle}</h3>
        <p >{text}</p>
            </div>
            <div>
        <ul className={Styles.Questions__list}>
          {titles.map((title) => (
             <li
             className={`${Styles.Questions__item} ${title.title === selectedTitle ? Styles.active : ''}`}
             key={title.id}
             onClick={() => handleTitleClick(title.title)}
           >
             {title.title}
           </li>
          ))}
        </ul>

            </div>
      </div>
    </div>
  );
};
 export default Questions;