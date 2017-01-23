import React from 'react';
import QA from './qa';

const Categories = ({ categories, onCategoryClick, cards }) => (
  <div>
    <h2>List of categories</h2>
    <ul>
      {categories.map(category =>
      <li key={category.id} onClick={()=> {onCategoryClick(category.name)}}>
        {category.name}
      </li>
      )}
    </ul>

  <div className="questionListing">
    <ul>
      {cards.map(card =>
        <QA
          key={card.id}
          {...card} />
        )}
    </ul>
  </div>
  </div>
)

export default Categories;
