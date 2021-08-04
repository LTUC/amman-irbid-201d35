'use strict';
// let num1 = Number(prompt('please enter num1'));
// let num2 = Number(prompt('please enter num2'));



// sum(num1, num2);
// function sum(a, b) {
//     let sum = a + b;
//     console.log('sum = ' + sum);
//     // return sum;
// }
// console.log('the sum is ' + sum(num1, num2));


let sub = function (a, b) {
    let sub = a - b;

    return sub;
}

// console.log('sub = ' + sub(num1, num2));

let userName = 'shihab';
let userAge = 35;

let userInfo = function (a, b) {
    let userFullName = a + ' ahmad';
    let userAgeplus5 = b + 5;

    return [userFullName, userAgeplus5];
}
console.log(userInfo(userName, userAge)[1]);


(function () {
    console.log('hi');
})();

(function () {
    console.log('hi');
})();

(function (userName) {
    console.log('hi ' + userName);
})('abdallah');

