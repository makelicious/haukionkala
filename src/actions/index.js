export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';
let nextQuestionId = 1;

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    id: nextQuestionId++,
    question: card.question,
    answer: card.answer
  }
}
export const next = (card, length) => {
  console.log(card.id);
  console.log(length - 1);
  if(card.id === length -1) {
    return {
      type: NEXT_CARD,
      id: 0
    }
}
  return {
    type: NEXT_CARD,
    id: card.id + 1
  }
}
