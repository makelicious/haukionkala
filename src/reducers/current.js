const current = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT_QUESTION':
    return state + 1
    case 'PREV_QUESTION':
    return state + 1
  default:
  return state
  }
}


export default current;
