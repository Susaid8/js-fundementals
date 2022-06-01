'use strict';

const { set } = require("express/lib/application");

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// destructuring arrays
// const arr = [2,3,4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// console.log(arr) // [ 2, 3, 4 ]
// console.log(a) // 2
// console.log(b) // 3
// console.log(c) // 4

// const [x, y, z] = arr
// console.log(x, y, z) // 2 3 4

// const restaurant = {
//     name: 'classico italiano',
//     location: 'via angelo tavanti 21, firenze, italy',
//     categories: ['italian', 'pizzeria', 'vegeterian', 'organic'],
//     starterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu: ['pizza', 'pasta', 'risotto'],

//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     }
// }

// const [main, secondary] = restaurant.categories
// console.log(main, secondary) // italian pizzeria
// let [main, secondary] = restaurant.categories
// console.log(main, secondary) // italian vegeterian

// switching variables one way
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary) // vegeterian italian // switches values
// and another
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

//return 2 values from a function
// console.log(restaurant.order(2,0)) // [ 'garlic bread', 'pizza' ]

// const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main) // garlic bread pizza

// nested destructuring
// const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested
// console.log(i, j) // 2 [ 5, 6 ]

// const [i, , [j, k]] = nested
// console.log(i, j, k) // 2 5 6

// looping arrays, the for-of loop
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item)  
//   Focaccia
//   Bruschetta
//   Garlic Bread
//   Caprese Salad
//   Pizza
//   Pasta
//   Risotto

// for (const item of menu.entries()) {
//   console.log(item)
// }
// [ 0, 'Focaccia' ]
// [ 1, 'Bruschetta' ]
// [ 2, 'Garlic Bread' ]
// [ 3, 'Caprese Salad' ]
// [ 4, 'Pizza' ]
// [ 5, 'Pasta' ]
// [ 6, 'Risotto' ]

// for (const [i, el] of menu.entries()) {
//   console.log(`${i +1}: ${el}`)
// }
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

// sets // no indexes in sets // main use case is to remove duplicates values of arrays
const ordersSet = new Set([
  'pasta', 
  'pizza', 
  'pizza', 
  'risotto', 
  'pasta', 
  'pizza'
])

// console.log(ordersSet) // Set(3) { 'pasta', 'pizza', 'risotto' }

// console.log(new Set('jonas')) // Set(5) { 'j', 'o', 'n', 'a', 's' }

// console.log(ordersSet.size) // 3 // check size
// console.log(ordersSet.has('pizza')) // true // similar to includes
// console.log(ordersSet.has('bread')) // false // similar to includes

// add elements to set
// ordersSet.add('garlic bread')
// ordersSet.add('garlic bread')
// delete elements from set
// ordersSet.delete('risotto') // Set(3) { 'pasta', 'pizza', 'garlic bread' }
// ordersSet.clear() // Set(0) {} // clears everything
// console.log(ordersSet) // Set(4) { 'pasta', 'pizza', 'risotto', 'garlic bread' }

// loop over set
// for (const order of ordersSet) console.log(order)
// Set(3) { 'pasta', 'pizza', 'garlic bread' }
// pasta
// pizza
// garlic bread

// example of main use case
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffUnique = new Set(staff)
// console.log(staffUnique) // Set(3) { 'Waiter', 'Chef', 'Manager' } 

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique) // [ 'Waiter', 'Chef', 'Manager' ] made new array