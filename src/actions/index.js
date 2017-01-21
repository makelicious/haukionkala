export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';

let nextCardId = 1;

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    id: nextCardId++,
    question: card.question,
    answer: card.answer
  };
}

export const nextCard = (currentCard, cardsAmount) => {
  //id starts from 0 to match array positions
  const nextCardId = currentCard.id === cardsAmount - 1 ? 0 : currentCard.id  + 1;

  return {
    type: NEXT_CARD,
    id: nextCardId
  };
}
