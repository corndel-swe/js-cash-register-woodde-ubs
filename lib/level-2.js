import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  // Initialize total coins variable
  let totalCoins = 0
  // loop through each oject in the drawer
  for (let object of drawer) {
    // if the object is a coin (i.e. value is < than 100), do something, otherwise skip
    if (object.value < 100)
      // add object.quantity to totalCoins
      totalCoins += object.quantity
  }
  // return totalCoins
  return totalCoins
}

// another way
// const coinNames = ('penny', 'nickel', 'dime', quarter)
// for let (item of drawwer) {}


/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  // Initialize total coins variable
  let totalNotes = 0
  // loop through each oject in the drawer
  for (let object of drawer) {
    // if the object is a note (i.e. value is > than 99), do something, otherwise skip
    if (object.value > 99)
      // add object.quantity to totalNotes
      totalNotes += object.quantity
  }
  // return totalNotes
  return totalNotes
}
