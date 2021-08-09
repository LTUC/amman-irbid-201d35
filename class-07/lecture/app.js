'use strict';
// let shihab = {
//     stdName: 'shihab',
//     age: 35,
//     grade: 90,
//     sayHello: function () {
//         console.log('hello');
//     }
// }
// shihab.sayHello();

// let emad = {
//     stdName: 'emad',
//     age: 25,
//     grade: 95,
//     sayHello: function () {
//         console.log('hello');
//     }
// }
// emad.sayHello();
let students = [];
let container = document.getElementById('container');
let tableEl = document.createElement('table');

function Student(whatever, age, grade) {
    this.stdName = whatever;
    this.age = age;
    this.grade = grade;
    // this.sayHello = function () {
    //     console.log(`hello my name is ${this.stdName}`);
    // }
    students.push(this);
}
Student.prototype.sayHello = function () {
    console.log(`hello my name is ${this.stdName}`);
}
Student.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    let tdEl2 = document.createElement('td');
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tdEl1.textContent = this.stdName;
    tdEl2.textContent = this.age;
    tdEl3.textContent = this.grade;
}
new Student('shihab', 35, 90);
// let emad = new Student('emad', 25, 95);
new Student('emad', 25, 95);
let omar = new Student('omar', 23, 99);
// omar.sayHello();
new Student('yasmen', 22, 98);
new Student('tariq', 24, 99);
// console.log(students);
// students[3].sayHello();
function createTableHeader() {
    container.appendChild(tableEl);
    let trEl = document.createElement('tr');
    let thEl1 = document.createElement('th');
    thEl1.textContent = 'name';
    let thEl2 = document.createElement('th');
    thEl2.textContent = 'age';
    let thEl3 = document.createElement('th');
    thEl3.textContent = 'grade';
    trEl.appendChild(thEl1);
    trEl.appendChild(thEl2);
    trEl.appendChild(thEl3);
    tableEl.appendChild(trEl);
}
createTableHeader();
for (let i = 0; i < students.length; i++) {
    // students[i].sayHello();
    students[i].render();
}

