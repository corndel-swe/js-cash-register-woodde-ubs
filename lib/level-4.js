import { drawer } from '../drawer.js'
import { removeItem } from './level-1.js'

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
// export function canMakeAmount(target, drawer) {
//   // code here
//   // set up counter
//   let total = 0
//   // for loop
//   for (let i = 0; i < drawer.length; i++) {
//     // add the amount of this money demonitation to the total
//     const demonination = drawer[i]
//     const value = demonination.value * demonination.quantity
//     total += value
//     if (target >= total) {
//       return true
//     } else {
//       return false
//     }
//   }

// }

// Tim's way
export function canMakeAmount(target, drawer) {

  // set up counter
  let remainder = target
  // for loop
  for (let i = 0; i < drawer.length; i++) {
    // add the amount of this money denomination to the total
    const denomination = drawer[i]
    // calculate how many of this denomination we need
    const neededAmount = Math.floor(remainder / denomination.value)
    remainder -= denomination.value * Math.min(neededAmount, denomination.quantity)

    if (remainder == 0) {
      return true
    }
  }


  return false
}


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
