import React from 'react';
import CategoryList from './categorylist';

function Categories(props) {
  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...props} />
      <div className='questions'>
        <ul className='questions__list'>
          {props.cards.map(card =>
            <li
              className='questions__list__item'
              key={card.id}
            >
              <span
                className='list__item__delete'
                onClick={() => props.onDeleteClick(card)}>
                &#10799;
              </span>
              <p className='list__item__text'>Question: {card.question}</p>
              <p className='list__item__text'>Answer: {card.answer}</p>
          </li>,
        )}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
