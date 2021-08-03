'use strict';
// let userName = prompt('please enter your name');
// console.log(userName);
// if (userName) {

// }
// let number1 = prompt('please enter a number');

// if (number1 > 10 && userName == 'shihab') {
//     console.log('it more than 10');
//     alert('it more than 10');
// }

// truthy falsy values
// 1 0
let x = 0;//false
let y = 1;//true
// let num1 = -10;
// let num1 = 1.5;
// let num1 = '1';
// let num1 = '0';
// let num1 = 'false';
// let num1 = 3 / 5;

// let num2 = '';
// let num2;
// let num2 = null;
// let num2 = 3 / 'a';
// console.log(num2);

// let saif = -0;
// true    1 -10 1.5 '1' 'husam' true '0' 'false' 3 / 5
// false   0 '' false undefined null NaN -0
// if (saif) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// if (y) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//loop 
// for loop
// while loop
// do while loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// i = 0 >>> 0
// i = 1 >>> 1 
// i = 2 >>> 2

// i = 9 >>> 9
// i = 10 >>>  

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
//     // num = num + 1;
//     // num += 1;
// }
// num = 0 T >>> 0 num = 1 >>> 1
// let num2 = 11;
// do {
//     console.log(num2);
// } while (num2 < 10)

// let userName = prompt('please enter your name');
// console.log(userName);
// userName ='';
//false

// userName = null;
//false

//userName = s;
//true

// while (userName === '' || userName === null) {
//     userName = prompt('please enter your name');
// }

// while (!userName) {
//     userName = prompt('please enter your name');
// }

//arrays
let car1 = 'bmw';
let car2 = 'kia';
let car3 = 'ford';

let cars = ['bmw', 'kia', 'ford'];
// console.log(cars[0]);
cars.push('toyota');
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// console.log(cars.indexOf('lada'));

let mixArray = ['bmw', 1993, 5000, 'shihab', 'lightblue', true, ['ahmad', 'sami', 'leen']];

console.log(mixArray);

console.log(mixArray[6][2]);
console.log(mixArray[3]);
//

let favFoods = ['mansaf', 'shawarmah', 'burger'];
let answer = prompt('enter a food type');
for (let i = 0; i < favFoods.length; i++) {
    if (answer === favFoods[i]) {
        console.log('yes that\'s true');
        console.log(i + 1);
    }
}