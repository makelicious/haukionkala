import { connect } from 'react-redux';
import { nextCard, prevCard, toggleCard, categorySelected } from '../actions/index';
import Study from '../components/study';

const currentCard = (cards, id) => {
  return cards[id];
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    categorySelected: state.categorySelected,
    categories: state.categories,
    card: currentCard(state.cards, state.currentId),
    amountOfCards: state.cards.length,
    showAnswer: state.showAnswer,
    currentId: state.currentId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextClick: () => {
      dispatch(nextCard())
    },
    onPrevClick: () => {
      dispatch(prevCard())
    },
    toggle: (bool) => {
      dispatch(toggleCard(bool))
    },
    selectCategory: (bool, name) => {
      dispatch(categorySelected(bool, name))
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study)
