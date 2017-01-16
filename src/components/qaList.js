import React from 'react';
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

export default QAList
