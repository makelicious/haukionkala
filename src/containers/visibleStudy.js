import { connect } from 'react-redux'
import { next } from '../actions/index'
import Study from '../components/study'

const getCurrentCard = (cards, current, action) => {
  switch (action) {
    case 'SHOW_ALL':
      return cards
      default:
      return cards[current]
  }
}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    cards: getCurrentCard(state.cards, state.current),
    amountOfCards: state.cards.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id, length) => {
      dispatch(next(id, length))
    }
  }
}

const currentCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)


export default currentCard
