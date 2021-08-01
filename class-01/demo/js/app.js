'use strict';
// document.write('<h3>This is from js</h3>');


// input 
// var userName = 'ali'; //string
// var age = 34; //3.4 , -100 number
// var pass = true; //boolean

// processing

var grade = 85;

grade = grade + 5;
// grade += 5;

// output
// console.log(grade);

// i = 100;
// var i = '3';
// var i = '10';
// console.log(i);

// x = 5;
// let x = 20;
// let y = 10;
// console.log(x);
// console.log(y);

let userName2 = prompt('please enter your name');

// document.write('<h2>' + userName2 + '</h2>');
document.write(`<h2>${userName2}</h2>`);

// let age = parseInt(prompt('please enter your age?'));//string
let age = Number(prompt('please enter your age?'));//string

console.log(typeof age);

age += 10;

console.log(age);