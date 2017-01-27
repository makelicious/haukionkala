import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


export class CardInput extends React.Component {
  constructor() {

    super();
    this.state = {
      card: {
        question: '',
        answer: '',
        category: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    this.props.addCard(this.state.card);
    this.setState({
      card: Object.assign({}, this.state.card, {
        question: '',
        answer: ''
      })
    });
  }

  handleChange(event) {
    this.setState({
      card: Object.assign({}, this.state.card, {
        [event.target.id]: event.target.value
      })
    });
  }

  render() {
    return (
      <div className='container'>
        <h2 className='container__title'>Submit a new question</h2>
        <form
          className='card-form'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <label
            for='question'
            className='input__label'>
            Question
          </label><br/>
          <input
            className='card-form__input'
            type='text'
            id='question'
            value={this.state.card.question}/><br/>
          <label
            for='answer'
            className='input__label'>
            Answer
          </label><br/>
          <input
            className='card-form__input'
            type='text'
            id='answer'
            value={this.state.card.answer}/><br/>
          <label
            for='category'
            className='input__label'>
            Category
          </label><br/>
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
