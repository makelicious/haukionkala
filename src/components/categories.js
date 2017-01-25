import React from 'react';
import QA from './qa';

function Categories(props) {
  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <div className='categories'>
      <ul className='categories__list'>
          {props.categories.map(category =>
          <li
            className='categories__list__item'
            key={category.id}
            onClick={()=> {props.onCategoryClick(category.name)}}
          >
            {category.name}
          </li>
          )}
        </ul>
      </div>
      <div className='questions'>
        <ul className='questions__list'>
          {props.cards.map(card =>
            <QA
              key={card.id}
              {...card} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default Categories;
