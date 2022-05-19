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


//coding challenge
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
const markWeightOne = 78 
const markHeightOne = 1.69 

const johnWeightOne = 92 
const johnHeightOne = 1.95

const markBmiOne = markWeightOne / markHeightOne ** 2
const johnBmiOne = johnWeightOne / johnHeightOne ** 2
const markHigherBmiOne = markBmiOne > johnBmiOne

console.log(markBmiOne, johnBmiOne, markHigherBmiOne)

//test data 2
const markWeightTwo = 95
const markHeightTwo = 1.88 

const johnWeightTwo = 85
const johnHeightTwo = 1.76

const markBmiTwo = markWeightTwo / markHeightTwo ** 2
const johnBmiTwo = johnWeightTwo / johnHeightTwo ** 2
const markHigherBmiTwo = markBmiTwo > johnBmiTwo

console.log(markBmiTwo, johnBmiTwo, markHigherBmiTwo)


