/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */
function countServings(recipeBook) {
  // code here
  let totalServings = 0
  for (let recipe of recipeBook.recipes) {
    totalServings += recipe.servings
  }
  return totalServings

}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: [
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'beef', 'tomato sauce'],
      servings: 4,
      isVegetarian: false
    },

    {
      name: 'Vegetable Stir Fry',
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
      servings: 2,
      isVegetarian: true
    }
  ]
}

//console.log(recipeBook.recipes.servings)
// console.log(recipeBook.recipes[recipeBook.recipes.length - 1].servings)

// don't change below
export default countServings
