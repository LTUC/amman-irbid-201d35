'use strict';
let container = document.getElementById('container');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');

// btn1.addEventListener('click', function () {
//     // alert('hi');
//     let pEl = document.createElement('p');
//     pEl.textContent = 'hi my name is leen';
//     container.appendChild(pEl);
// });
// btn2.addEventListener('click', function () {
//     // alert('hi');
//     let pEl = document.createElement('p');
//     pEl.textContent = 'hi my name is leen';
//     container.appendChild(pEl);
// });
// btn1.addEventListener('click', sayHello);
// btn2.addEventListener('click', sayHello);

// function sayHello() {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'hi my name is leen';
//     container.appendChild(pEl);
// }


let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', addStudent);
function addStudent(event) {
    event.preventDefault();
    let pEl = document.createElement('p');
    let stdName = event.target.stdName.value;
    let age = event.target.age.value;
    let grade = event.target.grade.value;
    pEl.textContent = `hi my name is ${stdName} i'm ${age} years old and my grade is ${grade}`;
    container.appendChild(pEl);
}
