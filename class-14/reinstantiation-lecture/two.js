'use strict';

let btnEl = document.getElementById('showList');
btnEl.addEventListener('click', showList);
function showList() {
    let data = localStorage.getItem('std');
    let normalObj = JSON.parse(data);
    console.log(normalObj);
    if (normalObj) {
        //wrong way
        // for (let i = 0; i < normalObj.length; i++) {
        //     normalObj[i].render();
        // }

        //correct way
        for (let i = 0; i < normalObj.length; i++) {
            new Student(normalObj[i].stdName, normalObj[i].grade, normalObj[i].age);
            students[i].render();
        }
        console.log(students);
        btnEl.removeEventListener('click', showList);
    }
}