import React, { PropTypes } from 'react';

function QuestionList (props) {
  console.log(props);
  return (
    <li className='questions__list__item'>
      <p className='list__item__question'>Question: {props.question}</p>
      <p className='list__item__answer'>Answer: {props.answer}</p>
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
