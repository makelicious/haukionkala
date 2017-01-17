export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';
let nextQuestionId = 0;

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    id: nextQuestionId++,
    question: card.question,
    answer: card.answer
  }
}
export const next = () => {
  return {
    type: NEXT_CARD,
  }
}
