'use strict';
let container = document.getElementById('container');
let students = [];
function Student(stdName, grade, age) {
    this.stdName = stdName;
    this.grade = grade;
    this.age = age;
    students.push(this);
}
Student.prototype.render = function () {
    let pEl = document.createElement('p');
    container.appendChild(pEl);
    pEl.textContent = `Hello my name is ${this.stdName} i am ${this.age} years old and i got ${this.grade} out of 100.`;
}

function addStudent(event) {
    event.preventDefault();
    let stdName = event.target.stdName.value;
    let grade = event.target.grade.value;
    let age = event.target.age.value;
    let newStd = new Student(stdName, grade, age);
    newStd.render();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    let stringObj = JSON.stringify(students);
    localStorage.setItem('std', stringObj);
}