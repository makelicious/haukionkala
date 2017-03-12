import { checkForDuplicates, filterCardsByCategory, deleteCardById, shuffleCards } from '../utils/index';

export const ADD_CARD  = 'ADD_CARD';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const NEXT_CARD = 'NEXT_CARD';
export const PREV_CARD = 'PREV_CARD';
export const STUDY_CATEGORY_SELECTED = 'STUDY_CATEGORY_SELECTED';
export const CATEGORIES_CATEGORY_SELECTED = 'CATEGORIES_CATEGORY_SELECTED';
export const TOGGLE_CARD = 'TOGGLE_CARD';
export const SELECT_MODE = 'SELECT_MODE';

export const addCard = (card) => {
  return (dispatch, getState) => {
    const { cards, categories } = getState();
    dispatch({
      type: ADD_CARD,
      card: {
        id: cards.nextIdToCard,
        question: card.question,
        answer: card.answer,
        category: card.category
      },
    });

    const duplicates = checkForDuplicates(categories.categories, card.category);

    if(duplicates.length === 0) {
      dispatch({
        type: ADD_CATEGORY,
        id: categories.nextIdToCategory + 1,
        name: card.category
      });
    }
  };
};

export const nextCard = () => {
  return (dispatch, getState) => {
    const { studyView } = getState();
    const nextCardId = studyView.id === studyView.cards.length -1 ? 0 : studyView.id + 1;
    dispatch({
      type: NEXT_CARD,
      id: nextCardId
    })
  };
}

export const prevCard = () => {
  return (dispatch, getState) => {
    const { studyView } = getState();
    //if card id is 0 go to last card, otherwise go prev
    const prevCardId = studyView.id === 0 ? studyView.cards.length -1 : studyView.id -1;
    dispatch({
      type: PREV_CARD,
      id: prevCardId
    })
  }
}

export const toggleCard = (bool) => {
  return {
    type: TOGGLE_CARD,
    showAnswer: !bool
  };
}

export const selectStudyMode = (shuffle) => {
  return(dispatch, getState) => {
    dispatch({
      type: SELECT_MODE,
      shuffle
    });
    const { studyView } = getState();
    dispatch(selectStudyCategory(studyView.showCard, studyView.category));
  }
}


export const deleteCard = (card) => {
  return (dispatch, getState) => {
    const { cards, categories } = getState();
    const newCards = deleteCardById(cards.cards, card.id);

    dispatch({
      type: DELETE_CARD,
      id: card.id
    });

    const filteredCards = filterCardsByCategory(newCards, card.category);
      //After deleting cards, if there are no cards left, delete category
    if (filteredCards.length === 0) {
      const newCategories = categories.categories.filter((category) => (
        category.name !== card.category
      ));
      dispatch({
        type: DELETE_CATEGORY,
        categories: newCategories,
        deletedCategory: card.category
      });
    }
  }
}

export const selectStudyCategory = (showCard, name) => {
  return (dispatch, getState) => {
    const { cards, studyView } = getState();
    const filteredCards = filterCardsByCategory(cards.cards, name);

    if (studyView.category !== null) {
      showCard = !showCard;
    }

    dispatch({
      type: STUDY_CATEGORY_SELECTED,
      cards: filteredCards,
      shuffle: studyView.shuffle,
      category: name,
      showCard: !showCard,
      id: 0,
    });
  };
};

export const selectCategoriesCategory = (category) => {
  return (dispatch, getState) => {
    const { cards } = getState();
    const filteredCards = filterCardsByCategory(cards.cards, category);


    dispatch({
      type: CATEGORIES_CATEGORY_SELECTED,
      cards: filteredCards,
      category: category,
    })
  }
}
