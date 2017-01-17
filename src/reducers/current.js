const current = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT_CARD':
    return state + 1

  default:
  return state
  }
}


export default current;
