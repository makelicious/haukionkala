import React from 'react';
import QA from './qa';

const QAList = ({ cards }) => (
  <ul>
    {cards.map(card =>
      <QA
        key={card.id}
        {...card}
      />
    )}
  </ul>
)

export default QAList;
