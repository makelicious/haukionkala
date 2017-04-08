import React from 'react';
import CategoryList from './categorylist';

  class Categories extends React.Component {
    render() {
      this.questionToEdit = [];
      this.answerToEdit = [];


    function cardInEdit() {
      console.log(this.questionToEdit);
      console.log(this.answerToEdit);
      const editableCard = this.props.cards.filter(card => card.id === this.props.currentlyEditable);

      return editableCard[0];
    }

    const saveButton = this.props.currentlyEditable ?
      <div
        onClick={() => {this.props.onSaveClick(cardInEdit)}}>
        <span>Save!</span>
      </div>
      :
      null;

    function listRefs(el, list, id) {
      return list.push({
        el,
        id
      });
    } 

  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...this.props} />
      <div className='questions'>
        {saveButton}
        <ul className='questions__list'>
          {this.props.cards.map(card =>
            <li
              className='questions__list__item'
              // ref={(el) => listRefs(el, this.jeah)}
              key={card.id}>
              <span
                className='list__item__delete'
                onClick={() => this.props.onDeleteClick(card)}>
                &#10006;
              </span>
              <p className='list__item__header'>Question:</p>
              <p 
                className='list__item__text'
                ref={(el) => listRefs(el, this.questionToEdit, card.id)}
                contentEditable={card.id === this.props.currentlyEditable}>
                {card.question}
              </p>
              <span
                className='list__item__edit'
                onClick={() => {this.props.onEditClick(card.id)}}>
                Q &#x270e;
              </span>
              <p className='list__item__header'>Answer:</p>
              <p
                className='list__item__text'
                ref={(el) => listRefs(el, this.answerToEdit, card.id)}
                contentEditable={card.id === this.props.currentlyEditable}>
                {card.answer}
              </p>
              <span
                className='list__item__edit'
                onClick={() => {this.props.onEditClick(card.id)}}>
                A &#x270e;
              </span>
          </li>,
        )}
        </ul>
      </div>
    </div>
  );
  }
}

export default Categories;
