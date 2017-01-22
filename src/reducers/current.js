export const currentId = (state = 0, action) => {
  console.log(state);
  switch(action.type) {
    case 'NEXT_CARD':
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
