import { connect } from 'react-redux';
import Categories from '../components/categories';
import { selectCategoriesCategory, deleteCard } from '../actions/index';


const mapStateToProps = (state) => {
  const { categoriesView } = state;

  return {
    cards: categoriesView.cards,
    categories: state.categories.categories,
    nextIdToCategory: state.categories.nextIdToCategory
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (category) => {
      dispatch(selectCategoriesCategory(category))
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
