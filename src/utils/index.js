export function filterCardsByCategory(cards, category) {
  return cards.filter(card => card.category === category)
}

export function checkForDuplicates(categories, categoryToAdd) {
  return categories.filter(category => category.name === categoryToAdd);
}

export function deleteCardById(array, id) {
  return array.filter(card => card.id !== id);
}
