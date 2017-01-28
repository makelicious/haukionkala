import { connect } from 'react-redux';
import Categories from '../components/categories';
import { filterByCategory, deleteCard } from '../actions/index';


const mapStateToProps = (state) => {
  return {
    cards: state.currentlyVisibleCategory.cards,
    categories: state.categories,
    nextIdToCategory: state.nextIdToCategory
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (category) => {
      dispatch(filterByCategory(category))
    },
    onDeleteClick: (id) => {
      dispatch(deleteCard(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
