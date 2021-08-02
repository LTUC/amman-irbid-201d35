//
/*

*/
// var userName;//undefined
// let age;//undefined

// // console.log(userName);
// console.log(age);
// let userName = '3.5';
// console.log(typeof userName);

// let num1 = Number(prompt('please enter first number'));
// let num2 = Number(prompt('please enter the second number'));

// let sum = num1 + num2;
// console.log('the sum is ', sum);

// if (sum > 10) {
//     console.log('sum is more than 10');
// } else if (sum === 10) {
//     console.log('sum is 10');
// } else {
//     console.log('sum is less than 10');
// }

let num3 = 10;//number
let num4 = '10';//string


if (num3 === num4) {
    console.log('yes');
} else {
    console.log('no');
}


let grade = 90;
let examGrade = 75;

if (grade >= 90 && examGrade >= 75) {
    console.log('welcome to 301');
}
//!
//T >>> F
//F >>> T
if (grade != 80) {

}

// &&
//T T >>> T
//T F >>> F
//F T >>> F
//F F >>> F

// ||
//T T >>> T
//T F >>> T
//F T >>> T
//F F >>> F

let userType = prompt('please enter your type user or admin');


switch (userType) {
    case 'user':
        console.log('sorry you can\'t open the site');
        break;
    case 'admin':
        console.log('you can access the site');
        break;
    default:
        console.log('sorry i don\'t have this userType');
        break;
}

let carModel = prompt('please enter you car model');

if (carModel !== null) {
    carModel = carModel.toLowerCase();
}

switch (carModel) {
    case 'bmw':
        console.log('good to go');
        break;
    case 'kia':
    case 'lada':
        console.log('it\'s not safe');
        break;
    default:
        console.log('i don\'t have this car');
        break;
}

let carPrice = 1000;
