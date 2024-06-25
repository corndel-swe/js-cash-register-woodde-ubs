import { drawer } from '../drawer.js'

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
  // use the name to find the relevant object in the array
  // go through each item in the drawer
  for (let item of drawer) {
    // if the item has the name we are looking for then do something otherwise continue
    if (item.name == name) {
      // deduct 1 from the quantity field for that object
      item.quantity--
    }
  }
  return drawer

}


/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  // use the name to find the relevant object in the array
  // go through each item in the drawer
  for (let item of drawer) {
    // if the item has the name we are looking for then do something otherwise continue
    if (item.name == name) {
      // add 1 from the quantity field for that object
      item.quantity++
    }
  }
  return drawer
}
