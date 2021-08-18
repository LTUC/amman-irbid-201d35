'use strict';

let catForm = document.getElementById('catform');
let catList = document.getElementById('catlist');

let cats = [];

function Cat(catName) {
    this.catName = catName;
    cats.push(this);
}
Cat.prototype.render = function () {
    let listEl = document.createElement('li');
    catList.appendChild(listEl);
    listEl.textContent = this.catName;
}




function saveToLocalStorage() {
    let data = JSON.stringify(cats);
    localStorage.setItem('cat', data);
}

function readFromLocalStorage() {
    let stringObj = localStorage.getItem('cat');
    let data = JSON.parse(stringObj);
    console.log(data);
    if (data) {
        // cats = data;
        // for (let i = 0; i < data.length; i++) {
        //     cats[i].render();
        // }
        for (let i = 0; i < data.length; i++) {
            new Cat(data[i].catName);
            cats[i].render();
        }
    }
}

