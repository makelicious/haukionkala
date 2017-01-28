import React, { PropTypes } from 'react';

function QuestionList (props) {
  console.log(props);
  return (
    <li className='questions__list__item' onClick={() =>{props.onDeleteClick(props.id)}}>
      <p className='list__item__question'>Question: {props.cards.question}</p>
      <p className='list__item__answer'>Answer: {props.cards.answer}</p>
    </li>
  )
}




// QA.propTypes = {
//   onClick: PropTypes.func,
//   id: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired
// }

export default QuestionList;
