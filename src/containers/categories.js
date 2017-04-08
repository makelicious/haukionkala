import { connect } from 'react-redux';
import Categories from '../components/categories';
import { selectCategoriesCategory, deleteCard, editCard, saveCard } from '../actions/index';

const mapStateToProps = (state) => {
  const { categoriesView, cards } = state;

  return {
    cards: categoriesView.cards,
    categories: state.categories.categories,
    nextIdToCategory: state.categories.nextIdToCategory,
    currentCategory: categoriesView.category,
    currentlyEditable: cards.currentlyEditable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (category) => {
      dispatch(selectCategoriesCategory(category));
    },
    onDeleteClick: (id) => {
      dispatch(deleteCard(id));
    },
    onEditClick: (id) => {
      dispatch(editCard(id))
    },
    onSaveClick: (id) => {
      dispatch(saveCard(id))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
