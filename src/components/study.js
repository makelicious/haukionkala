import React from 'react';

class Study extends React.Component {
  render() {
    let shuffleClass = 'study-mode';
    let chronoClass = 'study-mode--active';

    if(this.props.shuffle) {
      shuffleClass = 'study-mode--active';
      chronoClass = 'study-mode';
    }
    let answer = this.props.showAnswer ?
      <div className='card__answer'>
        <h3 className='card__answer__title'>Answer</h3>
        <span>{this.props.card.answer}</span>
      </div>
      :
      null;

      let question = this.props.showCard ?
      <div className='card-wrapper'>
        <span className='card__question__nav' onClick={this.props.onPrevClick}>&lt;</span>
        <div className='card'>
          <div className='card__question' onClick={() => {this.props.toggle(this.props.showAnswer)}}>
            <h3 className='card__question__title'>Question {this.props.currentId + 1} / {this.props.amountOfCards}</h3>
            <span className='card__question__text'>{this.props.card.question}</span>
          </div>
        </div>
        <span className='card__question__nav' onClick={this.props.onNextClick}>&gt;</span>
      </div>
        :
        null;

    return (
      <div className='container'>
        <h2 className='container__title'>Study mode
          <span
            className={chronoClass}
            onClick={() => {this.props.selectMode(false)}}>
            Chronological
          </span>
          <span
            className={shuffleClass}
            onClick={() => {this.props.selectMode(true)}}>
            Shuffle
          </span>
        </h2>
        <div className='categories'>
          <ul className='categories__list'>
            {this.props.categories.map(category =>
            <li
              className={this.props.category === category.name ? 'categories__list__item--active' : 'categories__list__item'}
              onClick={()=> {this.props.selectCategory(this.props.showCard, category.name)}}
              key={category.id}>
              <h3 className='list__item__title'>{category.name}</h3>
            </li>
            )}
          </ul>
        </div>
        {question}
        {answer}
      </div>
    )
  }
}

export default Study;
