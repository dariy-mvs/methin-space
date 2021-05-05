import './App.css';
import Header_nav from './components/Header_nav';
import HeaderBox from './components/HeaderBox';
import Courses from './components/Courses';
import Direction from './components/Direction';
import OurAdvantages from './components/OurAdvantages';
import Prices from './components/Prices';
import Reviews from './components/Reviews.js';
import React, { useState } from 'react';
import FooterForm from './components/FooterForm.js';
import Adress from './components/Adress.js';
import Teacher from './components/Teacher';




function App() {


  let [userName, setUserName] = useState('');
  let [nameValid, setNameValid] = useState(false);
  let [userEmail, setUserEmail] = useState('');
  let [emailValid, setEmailValid] = useState(false);
  let [userNumber, setUserNumber] = useState('');
  let [numberValid, setNumberValid] = useState(false);
  let [userMessage, setUserMessage] = useState('');
  let [messageValid, setMessageValid] = useState(false);
  let [messageTheme, setMessageTheme] = useState('');
  let [myAgree, setMyAgree] = useState(false);
  let [formIsValid, setFormIsValid] = useState(false);
  let [errorMessage, setErrorMessage] = useState('');
  // let formObject = {
  //   'name': userName,
  //   'email': userEmail,
  //   'number': userNumber,
  //   'theme': messageTheme,
  //   'message': userMessage,
  //   'agree': myAgree
  // }


function updateUserName(name) {
  setUserName(name);
}

function updateErrorMessage(message) {
  setErrorMessage(message);
}

function updateUserEmail(email) {
  setUserEmail(email);
}

function updateUserNumber(number) {
  setUserNumber(number);
}
function updateFormIsValid(headerOrFooter) {
  switch(headerOrFooter) {
    case 'header': 
    const headerValidForm = nameValid && numberValid && emailValid && myAgree;
    setFormIsValid(headerValidForm);
    updateErrorMessage('');
    break;

    case 'footer':
    const footerValidForm = nameValid && messageValid && emailValid && myAgree;
    setFormIsValid(footerValidForm);
    updateErrorMessage('');
    break;
  }
  
};

function updateMyAgree(boolean) {
  setMyAgree(boolean);
}

function updateMessageTheme(theme) {
  setMessageTheme(theme);
}

function updateNameValid(boolean) {
  setNameValid(boolean)
}

function updateEmailValid(boolean) {
  setEmailValid(boolean)
}

function updateNumberValid(boolean) {
  setNumberValid(boolean)
}
function updateMessageValid(boolean) {
  setMessageValid(boolean)
}

function updateUserMessage(message) {
  setUserMessage(message)
}

  function formAddError(input) {
    input.classList.add('error');
  }

  function formRemoveError(input) {
    input.classList.remove('error');
  }

  function formValidate(input) {
    formRemoveError(input);
    switch(input.name) {
      
      case 'email':
      emailValid = userEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if (!emailValid) {
        updateErrorMessage((errorMessage) => {
          errorMessage = 'проверьте'
        });
        formAddError(input);
      } else {
        updateEmailValid(true);
      }
      break;

      case 'number':
      numberValid = userNumber.match(/^\d[\d\(\)\ -]{4,14}\d$/);
      if (!numberValid) {
        updateErrorMessage('проверьте корректность данных');
        formAddError(input);
      } else {
        updateNumberValid(true);
      }
      break;

      case 'message':
      if (userMessage === '') {
        updateErrorMessage('проверьте корректность данных');
        formAddError(input);
      } else {
        updateMessageValid(true);
      }
      break;

      case 'name': 
      if (userName !== '') {
        updateNameValid(true);
      } else {
        updateErrorMessage('проверьте корректность данных');
        formAddError(input);
      };
      default:
      break;
  }
  }


  return (
    <div className="App">
      <Header_nav />

      <HeaderBox 

      h1='methin.space' 
      h2='Академический подход в современной обработке' 
      descriptions={[{id: 1, text: 'Прогрессивная студия обучения музыке, расположенная в городе Краснодар.'}, {id: 2, text: 'Для нас всегда остается важнейшей задачей - улучшение качества и доступности музыкального образования. Наша цель - создать идеальное пространство для вашего обучения!'}, {id: 3, text: 'Наша цель - создать идеальное пространство для вашего обучения!'}]} 
      backgroundUrl='/img/band_4671748_1920_1193.png' updateUserName={updateUserName} userName={userName} updateUserEmail={updateUserEmail} userEmail={userEmail} userNumber={userNumber} updateUserNumber={updateUserNumber} myAgree={myAgree} updateMyAgree={updateMyAgree} formValidate={formValidate}  formIsValid={formIsValid} updateFormIsValid={updateFormIsValid} errorMessage={errorMessage}/>

      <main>

      <Courses 

      courses={[{id: 1, nameButton: 'курс 1', header: 'Курс по аккустической гитаре: простые прогрессии.', description: 'lorem1', url:'/download_files/9101_-_Prostye_progressii_akkordov_1.pdf', documentName: 'имя файла при скачивании' }, {id: 2, nameButton: 'курс 2', header: 'Курс по аккустической гитаре: простые прогрессии2.', description: 'lorem2', url:'nnn', documentName: 'имя файла при скачивании' }, {id: 3, nameButton: 'курс 3', header: 'Курс по аккустической гитаре: простые прогрессии3', description: 'lorem3', url:'mmm', documentName: 'имя файла при скачивании' }]} 
      src={'/img/layers-3.png'} 
      alt={'гитара силуэт'}/> 
{/* Не могу определиться: эти компоненты - section или article? */}
      <Direction 
      
      courseHeader={'гитара'} 
      courseDescription={'Научитесь играть на гитаре - одном из самых популярных инструментов в мире. Раскройте свою индивидуальность, исполняя и сочиняя музыку.'} 
      questions={[{id: 1, question: 'С какого возраста можно начинать обучение?', answer: 'Наши программы рассчитаны и на детей, и на взрослых. Мы принимаем на обучение с 10 лет.'}, {id: 2, question: 'Что вам дает гитара?', answer: 'Занятия музыкой дисциплинируют, улучшают интеллект и логику, повышают самооценку. Игра на гитаре способствует творчеству, что раскрывает весь потенциал личности.'}]} 
      imgPosition={'left'} 
      img={{alt: 'гитарист', src: '/img/layers-22.png'}}/>

      <Direction 
      
      courseHeader={'бас-гитара'} 
      courseDescription={'Возьмите ритм-секцию под свой контроль, используя программы разработанные специально для вас. Умение играть на этом инструменте - это шанс стать незаменимым в любом музыкальном коллективе.'} questions={[{id: 1, question: 'Как играть лучше?', answer: 'Регулярные занятия под руководством опытного преподавателя- залог успеха в любом вашем начинании.'}, {id: 2, question: 'Нужно ли уметь играть на гитаре, чтобы начать занятия бас-гитарой?', answer: 'Для получения первого опыта и базовых навыков не нужно уже быть музыкантом. Наша методика подходит для тех, кто делает первые шаги в музыке.'}]} 
      imgPosition={'right'} 
      img={{alt: 'гитарист', src: '/img/layers-23.png'}}/>

      <OurAdvantages 

      sectionHeader={'Почему мы классные?'} 
      sectionDescription={'Потому что бла-бла-бла'} 
      advantages={[{id: 1, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}, {id: 2, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}, {id: 3, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}, {id: 4, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}, {id: 5, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}, {id: 6, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.'}]} />

      <Prices 
      sectionHeader={'стоимость обучения'} 
      sectionDescription={'Наши цены самые лучшие'} 
      prices={[{id: 1, packageName: 'Базовый', price: '3000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла', 'bla-bla-bla']}, {id: 2, packageName: 'Продвинутый', price: '5000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла']}, {id: 3, packageName: 'Профессиональный', price: '7000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла']}]}/>
    </main>
      <Reviews 
      sectionHeader={'отзывы'} 
      sectionDescription={'Описание наших отзывов'}
      reviews={[{id: 1, authorName: 'Кот Василий', authorPosition: 'менеджер по ловле мышей', authorImg: {alt: 'подпись к изображению', src: '/img/cat1.png'}, reviewText: 'Это лучшая школа в городе!'}, {id: 2, authorName: 'Кот Иннокентий', authorPosition: 'менеджер по ловле мышей', authorImg: {alt: 'подпись к изображению', src: '/img/cat2.png'}, reviewText: 'Это лучшая школа в городе!'}, {id: 3, authorName: 'Кот', authorPosition: 'менеджер по ловле мышей', authorImg: {alt: 'подпись к изображению', src: '/img/cat3.jpg'}, reviewText: 'Это лучшая школа в городе!'}, {id: 4, authorName: 'Кот Simba', authorPosition: 'менеджер по ловле мышей', authorImg: {alt: 'подпись к изображению', src: '/img/cat4.jpg'}, reviewText: 'Это лучшая школа в городе!'}]}
      />
      <Teacher img={{src: '/img/cat1.png', alt: 'Артём'}} teacherName='Артём Кремененко' teacherPosition='Основатель музыкальной школы' teacherDescription='hjhjhgjhgjhgjfhgjfhgffhhgfhgfhgfhgfhgf'/>
    <footer>
    <FooterForm updateUserName={updateUserName} userName={userName} updateUserEmail={updateUserEmail} userEmail={userEmail} updateUserMessage={updateUserMessage} userMessage={userMessage} updateMessageTheme={updateMessageTheme} messageTheme={messageTheme} myAgree={myAgree} updateMyAgree={updateMyAgree} formValidate={formValidate}  formIsValid={formIsValid} updateFormIsValid={updateFormIsValid} errorMessage={errorMessage}/>
    <Adress />
    </footer>
    </div>
  );
}

export default App;


//https://www.youtube.com/watch?v=-yZfdyPMzCE