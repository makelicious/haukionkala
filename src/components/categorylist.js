import React from 'react';

function CategoryList(props) {
  console.log(props);
  return (
    <div className='categories'>
      <ul className='categories__list'>
        {props.categories.map(category =>
        <li
          className='categories__list__item'
          key={category.id}
          onClick={()=> {props.onCategoryClick(category.name)}}>
          {category.name}
        </li>
        )}
      </ul>
    </div>

  );
}

export default CategoryList;
