import React from 'react';

class Study extends React.Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false
    }

    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(event) {
    console.log('wdapaniggas');
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  }


  render() {

    console.log(this.props.currentId);
    let answer = this.props.showAnswer ?
      <div className='card__answer'>
        <h3 className='card__answer_title'>Answer</h3>
        <span>{this.props.card.answer}</span>
      </div>
      :
      null;

    let title = this.props.categorySelected.visible ?
      <h2 className='container__title'>
        Category Selected: {this.props.categorySelected.category}
      </h2>
      :
      <h2 className='container__title'>
        Select a category
      </h2>;


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
        : null;


        let dropdown = this.state.showDropdown ?
          <ul className='dropdown-menu'>
            {this.props.categories.map(category =>
            <li
              className='dropdown-menu__item'
              key={category.id}
            >
          {category.name}
          </li>
        )}
          </ul>
          :
          null;

        let categoryList = this.props.categorySelected.visible ?
        <div>
          <h3>Switch category: <span onClick={this.handleDropdown}>{this.props.categorySelected.category}</span></h3>
          {dropdown}
        </div>
          :
          <div className='categories-menu'>
            <ul className='categories-menu__list'>
            {this.props.categories.map(category =>
            <li
              className='categories-menu__list__item'
              key={category.id}
              onClick={()=> {this.props.selectCategory(this.props.categorySelected.visible, category.name)}}
            >
            {category.name}
            </li>
            )}
            </ul>
          </div>;



    return (
      <div className='container'>
        {title}
        {categoryList}
        {question}
      </div>
    )
  }
}

export default Study;
