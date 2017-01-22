import React from 'react';

class Study extends React.Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }
  render() {
    console.log(this.props);
    let view = this.state.showAnswer ?
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
      <div onClick={this.handleClick} className='card-container'>
        <h2 className='cardInfo'>Card {this.props.card.id + 1} / {this.props.amountOfCards}</h2>
        <div className='card'>
          {view}
          <span className="font-awesome-caret-square-o-down"></span>
        </div>
        <span className="fontawesome-arrow-right" onClick={() =>{this.props.onClick()}}></span>
      </div>
    )
  }
}

export default Study;
