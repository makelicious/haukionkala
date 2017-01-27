export const currentId = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT_CARD':
      return action.id;
    case 'PREV_CARD':
      return action.id;
    case 'SWITCH_CATEGORY':
      return action.id;
  default:
  return state;
  }
}

 export const nextIdToCard = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return action.id;

    default:
      return state;
  }
}

export const showAnswer = (state = false, action) => {
  switch(action.type) {
    case 'NEXT_CARD':
      return false;
    case 'PREV_CARD':
      return false;
    case 'TOGGLE_CARD':
      return action.toggle
    default:
      return state;
    }
  }
