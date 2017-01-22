import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';


class CardInput extends React.Component {
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
        answer: '',
      })
    })
  }

  handleChange(event) {
    this.setState({
      card: Object.assign({}, this.state.card, {
        [event.target.name]: event.target.value
      })
    })
  }

  render() {

    return (
      <div className='form-container'>
        <h2>Submit a new question</h2>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <fieldset>
            <input
              type='text'
              name='question'
              placeholder='Question:'
              value={this.state.card.question}
            />
            <input
              type='text'
              name='answer'
              placeholder='Answer:'
              value={this.state.card.answer}
            />
            <input
              type='text'
              name='category'
              placeholder='Category:'
              value={this.state.card.category}
            />
          <button type="submit">
            <span>Submit</span>
          </button>
          </fieldset>
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
    addCard: (id) => dispatch(addCard(id))
  };
}

CardInput = connect(mapStateToProps, mapDispatchToProps)(CardInput)

export default CardInput;
