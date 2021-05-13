import React, { Component } from 'react';
import './HomePage.css';
import HeaderNav from '../components/Header_nav';
import HeaderBox from '../components/HeaderBox';
import Courses from '../components/Courses';
import Direction from '../components/Direction';
import OurAdvantages from '../components/OurAdvantages';
import Prices from '../components/Prices';
import Reviews from '../components/Reviews';
import FooterForm from '../components/FooterForm';
import Adress from '../components/Adress';
import Teacher from '../components/Teacher';

export default class HomePage extends Component {
  // Братья-близнецы, добавляющие/снимающие класс error с поля
  static formAddError(input) {
    input.classList.add('error');
  }

  static formRemoveError(input) {
    input.classList.remove('error');
  }

  constructor() {
    super();
    // Здесь хранятся данные форм.
    // Формы синхронизированы, именно поэтому данные хранятся в общем родителе.
    this.state = {
      userName: '',
      userEmail: '',
      userNumber: '',
      userMessage: '',
      messageTheme: '',
      userAgree: false,
      errorMessage: '',
    };

    this.updateState = this.updateState.bind(this);
    this.formValidate = this.formValidate.bind(this);
  }

  // функция, обновляющая стейт.
  updateState(prop, value) {
    this.setState({ [prop]: value });
  }

  // Валидация каждого поля формы.
  // принимает поле, строку хедер или футер и на всякий случай ответ ошибки
  formValidate(input) {
    const {
      userEmail, userMessage, userAgree, userNumber, userName,
    } = this.state;
    let result = 0;
    HomePage.formRemoveError(input);
    switch (input.name) {
      case 'email': {
        const checkValidEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(userEmail);
        if (!checkValidEmail) {
          HomePage.formAddError(input);
          result = 1;
        } else result = 0;
      }
        break;

      case 'number': {
        const checkValidNumber = /^\d[\d() -]{4,14}\d$/g.test(userNumber);
        // /^\d[\d\(\)\ -]{4,14}\d$/g
        if (!checkValidNumber) {
          HomePage.formAddError(input);
          result = 1;
        } else result = 0; }

        break;

      case 'message':
        if (userMessage === '') {
          HomePage.formAddError(input);
          result = 1;
        } else result = 0;

        break;

      case 'name':
        if (userName === '') {
          HomePage.formAddError(input);
          result = 1;
        } else result = 0;
        break;

      case 'accept':
        if (userAgree !== true) {
          HomePage.formAddError(input);
          result = 1;
        } else result = 0;
        break;
      default:
        return result;
    }
    return result;
  }

  render() {
    const {
      userName, userEmail, userAgree, userMessage, userNumber, messageTheme, errorMessage,
    } = this.state;
    return (
      <div className="App">
        <HeaderNav />
        <HeaderBox
          descriptions={[{ id: 1, text: 'Прогрессивная студия обучения музыке, расположенная в городе Краснодар.' }, { id: 2, text: 'Для нас всегда остается важнейшей задачей - улучшение качества и доступности музыкального образования. Наша цель - создать идеальное пространство для вашего обучения!' }, { id: 3, text: 'Наша цель - создать идеальное пространство для вашего обучения!' }]}
          backgroundUrl="/img/band_4671748_1920_1193.png"
          updateState={this.updateState}
          userName={userName}
          userEmail={userEmail}
          userNumber={userNumber}
          userAgree={userAgree}
          formValidate={this.formValidate}
          errorMessage={errorMessage}
        />

        <main>

          <Courses
            courses={[{
              id: '1', nameButton: 'курс 1', header: 'Курс по аккустической гитаре: простые прогрессии.', description: 'lorem1', url: '/download_files/9101_-_Prostye_progressii_akkordov_1.pdf', documentName: 'имя файла при скачивании',
            }, {
              id: '2', nameButton: 'курс 2', header: 'Курс по аккустической гитаре: простые прогрессии2.', description: 'lorem2', url: 'nnn', documentName: 'имя файла при скачивании',
            }, {
              id: '3', nameButton: 'курс 3', header: 'Курс по аккустической гитаре: простые прогрессии3', description: 'lorem3', url: 'mmm', documentName: 'имя файла при скачивании',
            }]}
            src="/img/layers-3.png"
            alt="гитара силуэт"
          />

          <Direction
            courseHeader="гитара"
            courseDescription="Научитесь играть на гитаре - одном из самых популярных инструментов в мире. Раскройте свою индивидуальность, исполняя и сочиняя музыку."
            questions={[{ id: 1, question: 'С какого возраста можно начинать обучение?', answer: 'Наши программы рассчитаны и на детей, и на взрослых. Мы принимаем на обучение с 10 лет.' }, { id: 2, question: 'Что вам дает гитара?', answer: 'Занятия музыкой дисциплинируют, улучшают интеллект и логику, повышают самооценку. Игра на гитаре способствует творчеству, что раскрывает весь потенциал личности.' }]}
            imgPosition="left"
            img={{ alt: 'гитарист', src: '/img/layers-22.png' }}
          />

          <Direction
            courseHeader="бас-гитара"
            courseDescription="Возьмите ритм-секцию под свой контроль, используя программы разработанные специально для вас. Умение играть на этом инструменте - это шанс стать незаменимым в любом музыкальном коллективе."
            questions={[{ id: 1, question: 'Как играть лучше?', answer: 'Регулярные занятия под руководством опытного преподавателя- залог успеха в любом вашем начинании.' }, { id: 2, question: 'Нужно ли уметь играть на гитаре, чтобы начать занятия бас-гитарой?', answer: 'Для получения первого опыта и базовых навыков не нужно уже быть музыкантом. Наша методика подходит для тех, кто делает первые шаги в музыке.' }]}
            imgPosition="right"
            img={{ alt: 'гитарист', src: '/img/layers-23.png' }}
          />

          <OurAdvantages
            sectionHeader="Почему мы классные?"
            sectionDescription="Потому что бла-бла-бла"
            advantages={[{ id: 1, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' }, { id: 2, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' },
              { id: 3, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' }, { id: 4, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' }, { id: 5, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' }, { id: 6, header: 'С какого возраста можно начинать обучение?', advantage: 'Наши программы рассчитаны и на детей, и на взрослых.' }]}
          />

          <Prices
            sectionHeader="стоимость обучения"
            sectionDescription="Наши цены самые лучшие"
            prices={[{
              id: 1, packageName: 'Базовый', price: '3000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла', 'bla-bla-bla'],
            }, {
              id: 2, packageName: 'Продвинутый', price: '5000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла', 'bla-bla-bla'],
            }, {
              id: 3, packageName: 'Профессиональный', price: '7000', time: 'оплата за месяц', packageFeatures: ['бла', 'бла-бла', 'bla-bla-bla'],
            }]}
          />
        </main>
        <Reviews
          sectionHeader="отзывы"
          sectionDescription="Описание наших отзывов"
          reviews={[{
            id: 1, authorName: 'Кот Василий', authorPosition: 'менеджер по ловле мышей', authorImg: { alt: 'подпись к изображению', src: '/img/cat1.png' }, reviewText: 'Это лучшая школа в городе!',
          }, {
            id: 2, authorName: 'Кот Иннокентий', authorPosition: 'менеджер по ловле мышей', authorImg: { alt: 'подпись к изображению', src: '/img/cat2.png' }, reviewText: 'Это лучшая школа в городе!',
          }, {
            id: 3, authorName: 'Кот', authorPosition: 'менеджер по ловле мышей', authorImg: { alt: 'подпись к изображению', src: '/img/cat3.jpg' }, reviewText: 'Это лучшая школа в городе!',
          }, {
            id: 4, authorName: 'Кот Simba', authorPosition: 'менеджер по ловле мышей', authorImg: { alt: 'подпись к изображению', src: '/img/cat4.jpg' }, reviewText: 'Это лучшая школа в городе!',
          }]}
        />
        <Teacher
          img={{ src: '/img/cat1.png', alt: 'Артём' }}
          teacherName="Артём Кремененко"
          teacherPosition="Основатель музыкальной школы"
          teacherDescription="hjhjhgjhgjhgjfhgjfhgffhhgfhgfhgfhgfhgf"
        />
        <footer>
          <FooterForm
            updateState={this.updateState}
            userName={userName}
            userEmail={userEmail}
            userMessage={userMessage}
            messageTheme={messageTheme}
            userAgree={userAgree}
            formValidate={this.formValidate}
            errorMessage={errorMessage}
          />
          <Adress />
        </footer>
      </div>
    );
  }
}

// https://www.youtube.com/watch?v=-yZfdyPMzCE
