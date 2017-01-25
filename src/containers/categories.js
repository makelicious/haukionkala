import { connect } from 'react-redux';
import Categories from '../components/categories';
import { filterByCategory } from '../actions/index';


const mapStateToProps = (state) => {
  console.log(state);
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
