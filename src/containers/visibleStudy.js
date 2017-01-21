import { connect } from 'react-redux';
import { nextCard } from '../actions/index';
import Study from '../components/study';

const currentCard = (cards, id) => {
  return cards[id];
}

const mapStateToProps = (state) => {
  return {
    card: currentCard(state.cards, state.currentId),
    amountOfCards: state.cards.length
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (currentId, cardsAmount) => {
      dispatch(nextCard(currentId, cardsAmount))
    }
  };
}


const currentCardView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)


export default currentCardView;
