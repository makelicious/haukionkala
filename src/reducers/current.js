const current = (state = 0, action) => {
  console.log(state);
  switch(action.type) {
    case 'NEXT_CARD':
    return action.id
  default:
  return state
  }
}


export default current;
