import { connect } from 'react-redux';
import { nextCard, prevCard, toggleCard, selectStudyCategory } from '../actions/index';
import Study from '../components/study';

const currentCard = (cards, id) => {
  return cards[id];
};

const mapStateToProps = (state) => {
  const { studyView } = state;
  return {
    category: studyView.category,
    categories: state.categories.categories,
    card: currentCard(studyView.cards, studyView.id),
    amountOfCards: studyView.cards.length,
    showAnswer: studyView.showAnswer,
    showCard: studyView.showCard,
    currentId: studyView.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextClick: () => {
      dispatch(nextCard());
    },
    onPrevClick: () => {
      dispatch(prevCard());
    },
    toggle: (bool) => {
      dispatch(toggleCard(bool));
    },
    selectCategory: (bool, name) => {
      dispatch(selectStudyCategory(bool, name));
    },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Study);
