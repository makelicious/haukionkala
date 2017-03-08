import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';

const emptyField = (name) => {
        <span
        className='clear'
        onClick={this.clearField(name)}
        >&#10006;
      </span>
}


export class CardInput extends React.Component {
  constructor() {

    super();
    this.state = {
      card: {
        question: '',
        answer: '',
        category: ''
      },
      cardAdded: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  

  hideNotification() {
    this.setState({
      ...this.state,
      cardAdded: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const allFilled = Object.keys(this.state.card)
      .every((key) => this.state.card[key] !== '');

    if(allFilled) {
      this.props.addCard(this.state.card);
      this.setState({
        card: {
          ...this.state.card,
          question: '',
          answer: '',
        },
        cardAdded: true,
      });
      setTimeout(this.hideNotification, 3000);
    }
  }

  handleChange(event) {
    this.setState({
      card: Object.assign({}, this.state.card, {
        [event.target.id]: event.target.value
      })
    });
  }

  clearField(name) {
    const that = this;
    return function() {
      that.setState({
        card: Object.assign({}, that.state.card, {
          [name]: '',
        })
      });
    }
  }

  render() {
    const addNotification = this.state.cardAdded ?
     <p className='card-notification'>Card added!</p> :
     null;

    return (
      <div className='container'>
        <h2 className='container__title'>Submit a new question</h2>
        {addNotification}
        <form
          className='card-form'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <label
            htmlFor='question'
            className='input__label'>
            Question
          </label><br/>
          <span
            className='clear'
            onClick={this.clearField('question')}>
            &#10006;
          </span>
          <input
            className='card-form__input'
            type='text'
            id='question'
            value={this.state.card.question}/><br/>
          <label
            htmlFor='answer'
            className='input__label'>
            Answer
          </label><br/>
          <span
            className='clear'
            onClick={this.clearField('answer')}>
            &#10006;
          </span>
          <input
            className='card-form__input'
            type='text'
            id='answer'
            value={this.state.card.answer}/><br/>
          <label
            htmlFor='category'
            className='input__label'>
            Category
          </label><br/>
          <span
            className='clear'
            onClick={this.clearField('category')}>
            &#10006;
          </span>
          <input
            className='card-form__input'
            type='text'
            id='category'
            value={this.state.card.category}/>
          <button
            className='card-form__button'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nextIdToCard: state.nextIdToCard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInput)
