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
  console.log(state.cards[0]);
  return {
    cards: getCurrentCard(state.cards, state.current)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(next())
    }
  }
}

const currentCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)


export default currentCard
