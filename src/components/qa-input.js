import React from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../actions/index';


class QAForm extends React.Component {
  constructor() {
    super();
    this.state = {
      qa: {
        question: '',
        answer: '',
        category: ''

      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(event) {
    const { dispatch } = this.props;
    console.log(event.target.value);
    console.log(this.props);
    event.preventDefault();

    dispatch(addQuestion(this.state.qa));
    this.setState({
      qa: Object.assign({}, this.state.qa, {
        question: '',
        answer: '',
      })
    })
  }

  handleChange(event) {
    this.setState({
      qa: Object.assign({}, this.state.qa, {
        [event.target.name]: event.target.value
      })
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
        Question:
          <input
            type='text'
            name='question'
            value={this.state.qa.question}
            onChange={this.handleChange}
            />
          </label>
          <label>
            Answer:
          <input
            type='text'
            name='answer'
            value={this.state.qa.answer}
            onChange={this.handleChange}
            />
            </label>
            <label>
            Category (optional):
            <input
              type='text'
              name='category'
              value={this.state.qa.category}
              onChange={this.handleChange}
              />
              </label>

          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

QAForm = connect()(QAForm)

export default QAForm;
