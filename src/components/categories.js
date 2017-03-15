import React from 'react';
import CategoryList from './categorylist';

function Categories(props) {
  console.log(props);
  const saveButton = props.currentlyEditable ?
    <div
      onClick={() => {props.onSaveClick(props.currentlyEditable)}}>
      <span>Save!</span>
    </div>
    :
    null;
  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...props} />
      <div className='questions'>
        {saveButton}
        <ul className='questions__list'>
          {props.cards.map(card =>
            <li
              className='questions__list__item'
              key={card.id}
              contentEditable={card.id === props.currentlyEditable}>
              <span
                className='list__item__delete'
                onClick={() => props.onDeleteClick(card)}>
                &#10006;
              </span>
              <span
                className='list__item__edit'
                onClick={() => {props.onEditClick(card.id)}}>
                &#x270e;
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
