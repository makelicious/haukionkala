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
  return {
    cards: getAllCards(state.cards)
  };
}

const allCards = connect(
  mapStateToProps
)(QAList)


export default allCards;
