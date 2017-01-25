import { connect } from 'react-redux';
import { nextCard, toggleCard } from '../actions/index';
import Study from '../components/study';

const currentCard = (cards, id) => {
  return cards[id];
}

const mapStateToProps = (state) => {
  return {
    card: currentCard(state.cards, state.currentId),
    amountOfCards: state.cards.length,
    showAnswer: state.showAnswer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(nextCard())
    },
    toggle: (bool) => {
      dispatch(toggleCard(bool))
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)
