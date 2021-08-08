'use strict';
// let userName = prompt('please enter your name');
let container = document.getElementById('container');

console.log(container);
// document.write('<p>hello from js</p>');
let pEl = document.createElement('p');
// console.log(pEl);
// pEl.textContent = `hello ${userName}`;
pEl.textContent = 'hello from js';
console.log(pEl);
container.appendChild(pEl);

let shihab = {
    userName: 'shihab',
    foodLikes: ['mansaf', 'maglobeh', 'shawarmah']
}
let foodDiv = document.getElementById('theFoodLikes');
let ulEl = document.createElement('ul');
// ulEl.setAttribute()
let liEl;
for (let i = 0; i < shihab.foodLikes.length; i++) {
    liEl = document.createElement('li');
    liEl.textContent = shihab.foodLikes[i];
    ulEl.appendChild(liEl);
}
foodDiv.appendChild(ulEl);