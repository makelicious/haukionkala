import React from 'react';

class Study extends React.Component {

  render() {
    console.log(this.props);
    let answer = this.props.showAnswer ?
      <div className='card__answer'>
        <h3 className='card__answer__title'>Answer</h3>
        <span>{this.props.card.answer}</span>
      </div>
      :
      null;

      let active = (this.props.categorySelected.category === 'index' ? 'active' : '');





      let question = this.props.categorySelected.visible ?
        <div className='card'>
          <div className='card__question' onClick={() => {this.props.toggle(this.props.showAnswer)}}>
            <h3 className='card__question__title'>Question {this.props.currentId + 1} / {this.props.categorySelected.cards.length}</h3>
            <span className='card__question__text'>{this.props.categorySelected.cards[this.props.currentId].question}</span>
          </div>
          {answer}
          <span className="fontawesome-arrow-left" onClick={this.props.onPrevClick}></span>
          <span className="fontawesome-arrow-right" onClick={this.props.onNextClick}></span>
        </div>
        :
        null;

    return (
      <div className='container'>
        <h2 className='container__title'>Studymode</h2>
        <div className='categories'>
          <ul className='categories__list'>
            {this.props.categories.map(category =>
            <li
              className='categories__list__item'
              onClick={()=> {this.props.selectCategory(this.props.categorySelected.visible, category.name)}}
              key={category.id}>
              {category.name}
            </li>
            )}
          </ul>
        </div>
        {question}
      </div>
    )
  }
}

export default Study;
