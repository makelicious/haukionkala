import React from 'react';

function CategoryList(props) {
  return (
    <div className='categories'>
      <ul className='categories__list'>
        {props.categories.map(category =>
          <li
            className={props.currentCategory === category.name ? 'categories__list__item--active' : 'categories__list__item' }
            key={category.id}
            onClick={() => { props.onCategoryClick(category.name)}}
          >
            <h3>{category.name}</h3>
          </li>,
        )}
      </ul>
    </div>

  );
}

export default CategoryList;
