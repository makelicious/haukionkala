import React from 'react';
import QA from './qa';

const QAList = ({ cards }) => (
  <div>
  <h2>List of categories</h2>
  <ul>
    {cards.map(card =>
      <QA
        key={card.id}
        {...card}
      />
    )}
  </ul>
  </div>
)

export default QAList;
