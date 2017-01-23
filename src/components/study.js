import React from 'react';

class Study extends React.Component {
  constructor() {
    super();

  }


  render() {
    let view = this.props.showAnswer ?
      <div className='card__answer'>
        <h3 className='card__answer_title'>Answer</h3>
        <span>{this.props.card.answer}</span>
      </div>
      :
      <div className='card__answer__empty'>
      </div>;

    return (
      <div className='container'>
        <h2 className='container__title'>Card {this.props.card.id + 1} / {this.props.amountOfCards}</h2>
        <div className='card' onClick={() => {this.props.toggle(this.props.showAnswer)}}>
          <div className='card__question'>
            <h3 className='card__question__title'>Question</h3>
            <span className='card__question__text'>{this.props.card.question}</span>
          </div>
          {view}
          <span className="font-awesome-caret-square-o-down"></span>
        </div>
        <span className="fontawesome-arrow-right" onClick={() =>{this.props.onClick()}}></span>
      </div>
    )
  }
}

export default Study;
