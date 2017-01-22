import { connect } from 'react-redux';
import QAList from '../components/qaList';

const getAllCards = (cards, action) => {
  switch (action) {
    case 'SHOW_ALL':
      return cards
      default:
        return cards
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cards: getAllCards(state.cards),
    categories: state.categories,
    nextIdToCategory: state.nextIdToCategory
  };
}

const allCards = connect(
  mapStateToProps
)(QAList)


export default allCards;
