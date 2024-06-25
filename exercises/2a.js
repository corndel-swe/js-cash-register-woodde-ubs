/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  // initialise a count variable
  let count = 0

  // loop through recipes in the list
  for (let recipe of recipes) {
    if (recipe.isVegetarian == true) {    
      // if isVegetarian is True, then add 1 to the counter (make sure to use == for boolean evaluation)
      count++
    }
  }
  // return count
  return count

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
export default countVeggies
