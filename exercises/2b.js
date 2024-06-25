/**
 * Given an array of recipes, return a new array of strings containing
 * the name of each recipe
 */
function listNames(recipes) {
  // code here
  // const recipeNames = recipes.map(recipe => recipe.name)
  // return recipeNames
  return recipes.map(recipe => recipe.name)   // --> produces same result
}


// array provided for debugging:
const recipes = [
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

// don't change below
export default listNames
