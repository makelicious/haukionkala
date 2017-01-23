import React from 'react';

class Study extends React.Component {
  constructor() {
    super();

  }


  render() {
    let view = this.props.showAnswer ?
      <div>
        <p>Answer</p>
        <span>{this.props.card.answer}</span>
      </div>
      :
      <div>
        <p>Question</p>
        <span>{this.props.card.question}</span>
      </div>;

    return (
      <div className='container'>
        <h2 className='container__title'>Card {this.props.card.id + 1} / {this.props.amountOfCards}</h2>
        <div className='card' onClick={() => {this.props.toggle(this.props.showAnswer)}}>
          {view}
          <span className="font-awesome-caret-square-o-down"></span>
        </div>
        <span className="fontawesome-arrow-right" onClick={() =>{this.props.onClick()}}></span>
      </div>
    )
  }
}

export default Study;
