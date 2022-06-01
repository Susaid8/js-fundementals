// let js = "amazing";
// if (js === 'amazing') alert ('Javascript is fun');


// 40 + 8 + 23 - 10;
// console.log( 40 + 8 + 23 - 10);

// assignment operaters
// const now = 2037
// const ageJonas = now - 1991;
// const ageSara = now - 2018;
// console.log(ageJonas, ageSara) // 46 19
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3) // 92 4.6 8

// const firstName = 'jonas';
// const lastName = 'schmedtt';
// console.log(firstName + ' ' + lastName) // jonas schmedtt

// math operators
// let x = 10 + 5; // 15
// x += 10 // x = x + 10 // 25
// x *= 4 // x = x * 4 // 100
// x++ // x = x + 1 // 101
// x-- // x = x - 1 // 100
// console.log(x)

//comparison operator
// console.log(ageJonas > ageSara) // true
// console.log(ageSara >= 18) // true

// const isFullAge = ageSara >= 18

// console.log(now - 1991 > now - 2018) // true

// const now = 2037
// const ageJonas = now - 1991;
// const ageSara = now - 2018;

// // console.log(now - 1991 > now - 2018) // true

// // console.log(25 - 10 - 5) // 10

// let x, y;
// x = y = 25 - 10 - 5 // x = y = 10, x = 10
// // console.log(x, y)

// const averageAge = (ageJonas + ageSara) / 2
// console.log(ageJonas, ageSara, averageAge)


// coding challenge #1
/* mark and john are trying to compare their bmi which is 
calculated by bmi = mass / height ** 2 = (mass / (height * height))
mass in kg and height in meter

1. store marks and johns mass and height in variables
2. calculate both their bmis using the formula
3. creat a boolean variable 'markHigherBmi' containing 
info about whether mark has a higher bmi than john

test data 1: 
marks weight = 78 kg height = 1.69 m
johns weight = 92 kg height = 1.95 m

test data 2:
marks weight = 95 kg height = 1.88 m
johns weight = 85 kg height = 1.76 m

*/

//test data 1
// const markWeightOne = 78 
// const markHeightOne = 1.69 

// const johnWeightOne = 92 
// const johnHeightOne = 1.95

// const markBmiOne = markWeightOne / markHeightOne ** 2
// const johnBmiOne = johnWeightOne / johnHeightOne ** 2
// const markHigherBmiOne = markBmiOne > johnBmiOne

// console.log(markBmiOne, johnBmiOne, markHigherBmiOne)

// //test data 2
// const markWeightTwo = 95
// const markHeightTwo = 1.88 

// const johnWeightTwo = 85
// const johnHeightTwo = 1.76

// const markBmiTwo = markWeightTwo / markHeightTwo ** 2
// const johnBmiTwo = johnWeightTwo / johnHeightTwo ** 2
// const markHigherBmiTwo = markBmiTwo > johnBmiTwo

// console.log(markBmiTwo, johnBmiTwo, markHigherBmiTwo)


// object
// let me = {
//     name: 'jonas'
// }
// primitive - number - string - boolean - undefined - null - symbol - big int
// number
// let age1 = 30
// string
// let firstName = 'Jonas'
// boolean 
//  let fullAge = true
 // undefined 
//  let children;

 // template literals
//  const lastName = 'jonas'
//  const job = 'teacher'
//  const birthYear = 1991
//  const year = 2022

//  const jonas = "i'm " + lastName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
//  console.log(jonas)

//  const jonasNew = `i'm ${lastName}, a ${year - birthYear} year old ${job}!`
//  console.log(jonasNew)

// if / else

// const age = 15

// if(age >= 18) {
//     console.log('sara can start driving 😁')
// } // if statement

// if(age >= 18) {
//     console.log('sara can start driving 😁')
// } else {
//     const yearsLeft = 18 - age // 3 years
//     console.log(`sara is too young. wait another ${yearsLeft} years 🙃`)
// } // if else statement

// const birthYear = 2012
// let century
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// }
// console.log(century)

// coding challenge #2
/* mark and john are trying to compare their bmi which is 
calculated by bmi = mass / height ** 2 = (mass / (height * height))
mass in kg and height in meter

1. store marks and johns mass and height in variables
2. calculate both their bmis using the formula
3. creat a boolean variable 'markHigherBmi' containing 
info about whether mark has a higher bmi than john

test data 1: 
marks weight = 78 kg height = 1.69 m
johns weight = 92 kg height = 1.95 m

test data 2:
marks weight = 95 kg height = 1.88 m
johns weight = 85 kg height = 1.76 m

*/

//test data 1
// const markWeightOne = 78 
// const markHeightOne = 1.69 

// const johnWeightOne = 92 
// const johnHeightOne = 1.95

// const markBmiOne = markWeightOne / markHeightOne ** 2
// const johnBmiOne = johnWeightOne / johnHeightOne ** 2
// const markHigherBmiOne = markBmiOne > johnBmiOne

// console.log(markBmiOne, johnBmiOne, markHigherBmiOne)

// if/else statement
// regular output
// if (markBmiOne >= johnBmiOne) {
//     console.log ('marks bmi is higher than johns')
// } else {
//     console.log('johns bmi is higher than marks')
// }

// template string answer 
// if (markBmiOne >= johnBmiOne) {
//     console.log (`marks bmi ${markBmiOne} is higher than johns ${johnBmiOne}`)
// } else {
//     console.log (`johns bmi ${johnBmiOne} is higher than marks ${markBmiOne}`)
// }

//test data 2
// const markWeightTwo = 95
// const markHeightTwo = 1.88 

// const johnWeightTwo = 85
// const johnHeightTwo = 1.76

// const markBmiTwo = markWeightTwo / markHeightTwo ** 2
// const johnBmiTwo = johnWeightTwo / johnHeightTwo ** 2
// const markHigherBmiTwo = markBmiTwo > johnBmiTwo

// console.log(markBmiTwo, johnBmiTwo, markHigherBmiTwo)
// if/else statement
// regular output
// if (markBmiTwo >= johnBmiTwo) {
//     console.log ('marks bmi is higher than johns')
// } else {
//     console.log('johns bmi is higher than marks')
// }

// template string answer 
// if (markBmiTwo >= johnBmiTwo) {
//     console.log (`marks bmi ${markBmiTwo} is higher than johns ${johnBmiTwo}`)
// } else {
//     console.log (`johns bmi ${johnBmiTwo} is higher than marks ${markBmiTwo}`)
// }

// type conversion = manual converstion
// const inputYear = '1991 '
// console.log(Number(inputYear)) // converts string to number
// console.log(Number(inputYear) + 18) // 2009

// console.log(Number('jonas')) // NaN

// console.log(String(23)) // converts number to string

// type coercion = javascript does automatically
// console.log('i am ' + 23 + ' years old') // we have different primitives being used here. js uses the plus operater to trigger a coercion to strings
// console.log('23' - '10' - 3) // js converted the strings to numbers to do this. the minus operator triggers the opposite conversion

// falsy values = values that are not exactly false, but will become false when converted to a boolean
// always type coercion
// 5 falsy values = 0, '', undefined, null, NaN

// console.log(Boolean(0)) // false
// console.log(Boolean(undefined)) // flase
// console.log(Boolean('')) // false // only empty string is falsy
// console.log(Boolean(null)) // false 
// console.log(Boolean(NaN)) // false
// console.log(Boolean({})) // object is a truthy value

// const money = 100
// if (money) {
//     console.log ('dont spend it')
// } else {
//     console.log ('get a job')
// }

// equality operators == vs === vs != vs !==
// = is assignment operator
// == is loose equality operator (does type coercion = converts)
// === is comparison operator (strict)
// != is not equal loosely
// !== is not equal strictly
// const age = 19
// if (age === 18) console.log('yay')

//boolean logic uses and, or, and not operators
// const hasDriversLicense = true // variable a
// const hasGoodVision = true // variable b

// console.log(hasDriversLicense && hasGoodVision) // and operator can only be true if all values are true
// console.log(hasDriversLicense || hasGoodVision) // or operator needs only one value to be true
// console.log(!hasDriversLicense) // not operator will change true to false

// if (hasDriversLicense && hasGoodVision) {
//     console.log ('you can drive')
// } else {
//     console.log ('dont drive')
// }

// const isTired = true // variable c
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log ('you can drive')
// } else {
//     console.log ('dont drive')
// }

// coding challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, 
so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, 
as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and 
both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: 
Dolphins score 96, 108 and 89. 
Koalas score 88, 91 and 110
TEST DATA BONUS 1: 
Dolphins score 97, 112 and 101. 
Koalas score 109, 95 and 123
TEST DATA BONUS 2: 
Dolphins score 97, 112 and 101. 
Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// average score for each team
// const dolphins = Math.round((96 + 108 + 89) / 3)
// const koalas = Math.round((88 + 91 + 110) / 3)

// console.log(dolphins) // 98
// console.log(koalas) // 96

// comapre teams average score to determine winner
// if (dolphins > koalas) {
//     console.log (`dolphins won with a score of ${dolphins}`)
// } else if (koalas > dolphins) {
//     console.log (`koalas won with a score of ${koalas}`)
// } else if (koalas === dolphins) {
//    console.log(`you both won`)
//  } else {
//     console.log (`no one won`)
// } // dolphins won with a score of 98

// bonus 1
// const dolphins = Math.round((97 + 112 + 101) / 3)
// const koalas = Math.round((109 + 95 + 123) / 3)
// console.log(dolphins) // 103
// console.log(koalas) // 109

// if (dolphins && koalas > 100) {
//     console.log(`you both won with a score of ${dolphins} and ${koalas}`)
// } else if (dolphins > 100) {
//     console.log(`Dolphins won with a score of ${koalas}`)
// } else if (koalas > 100) {
//     console.log (`koalas won with a score of ${koalas}`)
// } else {
//     console.log (`no one won`)
// } // you both won with a score of ${dolphins} and ${koalas}

// bonus 2
// const dolphins = Math.round((97 + 112 + 101) / 3)
// const koalas = Math.round((109 + 95 + 106) / 3)
// console.log(dolphins) // 103
// console.log(koalas) // 103

// if (dolphins === koalas) {
//     console.log(`DRAW`)
// } else if (dolphins > 100) {
//     console.log(`Dolphins won with a score of ${koalas}`)
// } else if (koalas > 100) {
//     console.log (`koalas won with a score of ${koalas}`)
// } else {
//     console.log (`no one won`)
// } // DRAW

