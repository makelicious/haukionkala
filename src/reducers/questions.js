import {
  ADD_CARD,
} from '../actions/index';




const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
    console.log("hereil?!?!");
      return {
        id: action.id,
        question: action.question,
        answer: action.answer
      };
    default:
      return state;
  }
}


const cards = (state = [{question: 'mitä kuuluu?', answer: 'hyvää', id: 0, category: 'ebin'}], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        card(undefined, action)
      ];
    default:
      return state;
  }
}

export default cards;
