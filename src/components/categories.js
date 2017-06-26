import React from 'react';
import CategoryList from './categorylist';

class Categories extends React.Component {
  constructor() {
    super();
      this.state = {
        card: {
          question: '',
          answer: '',
          category: '',
        },
        currentlyEditable: -1,
      };

  }
  handleSave() {
      this.setState({
        ...this.state,
        currentlyEditable: false,
      });
      console.log(this.state.currentlyEditable);
  }

  startEditing(id) {
    this.setState({
      ...this.state,
      currentlyEditable: id,
    });
  }

  render() {
    console.log(this.state);
    const saveButton = 
      <div className='save__button'
        onClick={() => {this.handleSave()}}>
        <span>Save</span>
      </div>;

  return (
    <div className='container'>
      <h2 className='container__title'>List of categories</h2>
      <CategoryList {...this.props} />
      <div className='questions'>
        <ul className='questions__list'>
          {this.props.cards.map(card =>
            <li
              className='questions__list__item'
              key={card.id}
              contentEditable={card.id === this.props.currentlyEditable}>
              <span
                className='list__item__delete'
                onClick={() => this.props.onDeleteClick(card)}>
                &#10006;
              </span>
              <span
                className='list__item__edit'
                onClick={() => {this.startEditing(card.id)}}>
                &#x270e;
              </span>
              <p className='list__item__header'>Question:</p>
              <p className='list__item__text'>{card.question}</p>
              <p className='list__item__header'>Answer:</p>
              <p className='list__item__text'>{card.answer}</p>
              {card.id === this.state.currentlyEditable ? saveButton : null}
          </li>,
        )}
        </ul>
      </div>
    </div>
  );
  }
}

export default Categories;
