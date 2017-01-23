import React, { PropTypes } from 'react';

const QA = ({question, answer}) => (
  <li className='questions__list__item'>
    <p className='list__item__question'>Question: {question}</p>
    <p className='list__item__answer'>Answer: {answer}</p>
  </li>
)





// QA.propTypes = {
//   onClick: PropTypes.func,
//   id: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired
// }

export default QA;
