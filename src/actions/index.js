export const NEXT_CARD = 'NEXT_CARD';
export const ADD_CARD  = 'ADD_CARD';

export const addCard = (card) => {
  return (dispatch, getState) => {
    const { nextIdToCard } = getState();
    dispatch({
      type: ADD_CARD,
      id: nextIdToCard + 1,
      question: card.question,
      answer: card.answer
    })
  };
}


export const nextCard = () => {

  return (dispatch, getState) => {
    const {currentId, cards} = getState();
    const nextCardId = currentId === cards.length -1 ? 0 : currentId + 1;
    dispatch({
      type: NEXT_CARD,
      id: nextCardId
    })
  }
}
