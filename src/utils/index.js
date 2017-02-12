export function filterCardsByCategory(cards, category) {
  return cards.filter(card => card.category === category)
}

export function checkForDuplicates(categories, categoryToAdd) {
  return categories.filter(category => category.name === categoryToAdd);
}

export function deleteCardById(array, id) {
  return array.filter(card => card.id !== id);
}

export function shuffleCards(array) {
  let newArray = [];
  let arrayOfNums = [];
  for(let i = 0; i < array.length; i++) {
    arrayOfNums[i] = i;
  }
  for(let j = 0; j < array.length; j++) {
    let randomNum = Math.floor(Math.random() * arrayOfNums.length);
    let randomIndex = arrayOfNums[randomNum];
    newArray[j] = array[randomIndex];
    arrayOfNums.splice(randomNum, 1);
  }
  return newArray;
}
