import React, { PropTypes } from 'react';
import QA from './qa';

const QAList = ({ questions }) => (
  <ul>
    {questions.map(question =>
      <QA
        key={question.id}
        {...question}
      />
    )}
  </ul>
)

// QAList.propTypes = {
//
//   questions: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
//   })),
// }

export default QAList
