import React from 'react';
import QuestionList from './questionlist';
import CategoryList from './categorylist';

function Categories(props) {
  console.log(props.categories);
  console.log(props.cards);
  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...props}/>
      <div className='questions'>
        <ul className='questions__list'>
        {props.cards.map(card =>
          <li className='questions__list__item'
            key={card.id}
            onClick={() => props.onDeleteClick(card)}>
            Question: {card.question}
            Answer: {card.answer}
          </li>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Categories;
