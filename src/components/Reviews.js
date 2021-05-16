import React from 'react';
import './Reviews.css';
import PropTypes from 'prop-types';
import Arrows from './Arrows';

// Элемент принимает объект с элементами вида:
// {id: 1,
// authorName: 'Кот Василий',
// authorPosition: 'менеджер по ловле мышей',
// authorImg: {alt: 'подпись к изображению', src: '<ccылка на изображение>'},
// reviewText: 'Это лучшая школа в городе!'}
// из свойства props.reviews
// В props нужно передать:
// sectionHeader={'заголовок типа 'наши отзывы''}
// sectionDescription={'Описание наших отзывов'}
// reviews={[массив отзывов]}

export default function Reviews(props) {
  const { sectionHeader, sectionDescription, reviews } = props;
  const reviewsArrow = reviews.map((e) => (
    <li className="col_box_reviews_list_item" key={e.id}>
      <div className="review">
        <p className="review_text">{e.reviewText}</p>
      </div>
      <div className="review_author">
        <img className="review_author_photo" src={e.authorImg.src} alt={e.authorImg.alt} />
        <div className="review_author_nametext">
          <h5 className="review_author_name">{e.authorName}</h5>
          <p className="review_author_prof">{e.authorPosition}</p>
        </div>
      </div>
    </li>
  ));

  const scrollReviews = (event) => {
    const target = event.target.closest('.arrow');
    const reviewsList = target.closest('.col_box_reviews').querySelector('.col_box_reviews_list');
    if (target.classList.contains('arrow_right')) {
      reviewsList.scrollBy(393, 0);
    } else if (target.classList.contains('arrow_left')) {
      reviewsList.scrollBy(-393, 0);
    }
  };

  return (
    <article className="col_box_article col_box_detalis col_box_reviews color-block">
      <h3 className="col_box_detalis_header">{sectionHeader}</h3>
      <span className="col_box_detalis_description">{sectionDescription}</span>
      <ul className="col_box_reviews_list">
        {reviewsArrow}
      </ul>
      <Arrows arrowFunction={scrollReviews} />
    </article>
  );
}

Reviews.propTypes = {
  sectionHeader: PropTypes.string,
  sectionDescription: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.object),
};
Reviews.defaultProps = {
  sectionHeader: '',
  sectionDescription: '',
  reviews: [],
};
