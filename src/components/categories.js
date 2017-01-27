import React from 'react';
import QuestionList from './questionlist';
import CategoryList from './categorylist';

function Categories(props) {
  console.log(props.categories);
  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...props}/>
      <div className='questions'>
        <ul className='questions__list'>
        {props.cards.map(card =>
          <QuestionList
            key={card.id}
            {...card}
          />
        )}
        </ul>
      </div>
    </div>
  )
}

export default Categories;
