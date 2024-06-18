/**
 * This function changes the recipeBook's name to the newName
 * and then returns the updated recipeBook
 * e.g. renameBook(recipeBook, "Good eats") => { title: 'Good eats' }
 */
function renameBook(recipeBook, newName) {
  // update the title of the recipebook to the newname
  recipeBook.title = newName
  // return the receiptbook
  return recipeBook

}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: []
}



// don't change below
export default renameBook
