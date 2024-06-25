/**
 * Given a recipeBook containing recipes, returns the title of the last recipe
 * in the array
 */
function lastRecipe(recipeBook) {
  // code here

  // const recipeName = recipeBook.recipes[recipeBook.recipes.length - 1].name
  // return recipeName
  return recipeBook.recipes[recipeBook.recipes.length - 1]?.name
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

// console.log(recipeBook.recipes[0].name)
// console.log(recipeBook.recipes.length - 1)
// console.log(recipeBook.recipes[recipeBook.recipes.length - 1].name)
const whatIs = lastRecipe(recipeBook)
console.log(whatIs)

// don't change below
export default lastRecipe
