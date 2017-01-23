import React from 'react';
import QA from './qa';

const Categories = ({ categories, onCategoryClick, cards }) => (
  <div className='container'>
    <h2 className='container__title'>List of categories</h2>
    <ul className='container__list'>
      {categories.map(category =>
      <li
        className='container__list__item'
        key={category.id}
        onClick={()=> {onCategoryClick(category.name)}}
      >
        {category.name}
      </li>
      )}
    </ul>
    <div className='questions'>
      <ul className='questions__list'>
        {cards.map(card =>
          <QA
            className='questions__list__item'
            key={card.id}
            {...card} />
          )}
      </ul>
    </div>
  </div>
)

export default Categories;
