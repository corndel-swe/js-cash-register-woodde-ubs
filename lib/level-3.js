import { drawer } from '../drawer.js'

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
// export function sumDrawer(drawer) {
//   // set up counter
//   let total = 0
//   // for loop
//   for (let i = 0; i < drawer.length; i++) {
//     // add the amount of this money demonitation to the total
//     const demonination = drawer[i]
//     const value = demonination.value * demonination.quantity
//     total += value
//   }
//   // return formatted total
//   return "$" + (total / 100).toFixed(2)
//}

//Waynes solution
export function sumDrawer(drawer) {
  const totalAmount = drawer
    .reduce(
      (total, denom) => total + denom.value * denom.quantity,
      0
    )
  return `$${(totalAmount / 100).toFixed(2)}`
}