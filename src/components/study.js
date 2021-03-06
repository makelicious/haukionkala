import React from 'react';
import classNames from 'classnames';

import {
  isLeft,
  isUp,
  isRight,
  isDown,
  isSpace
} from '../utils/keys';


class Study extends React.Component {

  constructor() {
    super();
    this.checkKeyPresses = this.checkKeyPresses.bind(this);
  }

  checkKeyPresses(event) {
      if(isLeft(event.keyCode)) {
        event.preventDefault();
        this.props.onPrevClick();
      }
      if(isUp(event.keyCode)) {
        event.preventDefault();
        this.props.toggle(true);
      }
      if(isRight(event.keyCode)) {
        event.preventDefault();
        this.props.onNextClick();
      
      }
      if(isDown(event.keyCode)) {
        event.preventDefault();
        this.props.toggle(false);
      }
      if(isSpace(event.keyCode)) {
        event.preventDefault();
        this.props.toggle(this.props.showAnswer);  
      }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.checkKeyPresses);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.checkKeyPresses);
  }

  render() {

    const chronologicalClass = classNames({
      'study-mode': this.props.shuffle,
      'study-mode--active': !this.props.shuffle
    });

    const shuffleClass = classNames({
      'study-mode': !this.props.shuffle,
      'study-mode--active': this.props.shuffle
    });

    let answer = this.props.showAnswer ?
      <div className='card__answer'>
        <h3 className='card__answer__title'>Answer</h3>
        <span>{this.props.card.answer}</span>
      </div>
      :
      null;

      let question = this.props.showCard ?
        <div className='card-wrapper'>
          <span className='card__question__nav' onClick={this.props.onPrevClick}>&#10094;</span>
          <div className='card'>
            <div className='card__question' onClick={() => {this.props.toggle(this.props.showAnswer)}}>
              <h3 className='card__question__title'>Question {this.props.currentId + 1} / {this.props.amountOfCards}</h3>
              <span className='card__question__text'>{this.props.card.question}</span>
            </div>
          </div>
          <span className='card__question__nav' onClick={this.props.onNextClick}>&#10095;</span>
        </div>
        :
        null;

    return (
      <div className='container'>
        <h2 className='container__title'>Show cards:
          <span
            className={chronologicalClass}
            onClick={() => {this.props.selectMode(false)}}>
            Chronologically
          </span>
          <span
            className={shuffleClass}
            onClick={() => {this.props.selectMode(true)}}>
            Shuffle
          </span>
        </h2>
        <div className='categories'>
          <ul 
            className='categories__list'>
            {this.props.categories.map(category =>
            <li
              className={category.name === this.props.category ? 'categories__list__item--active' : 'categories__list__item'}
              onClick={()=> {this.props.selectCategory(this.props.showCard, category.name)}}
              key={category.id}>
              <h3 className='list__item__title'>{category.name}</h3>
            </li>
            )}
          </ul>
        </div>
        {question}
        {answer}
        <span className="tip">You can use arrow keys to go through cards</span>
      </div>

    );
  }
}

export default Study;
