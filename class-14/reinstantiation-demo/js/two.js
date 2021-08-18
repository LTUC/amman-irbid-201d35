'use strict';
let catBtn = document.getElementById('catbutton');
catBtn.addEventListener('click', showCat);
function showCat() {
    let data = localStorage.getItem('cat');
    let normalObj = JSON.parse(data);
    if (normalObj) {
        for (let i = 0; i < normalObj.length; i++) {
            new Cat(normalObj[i].catName)
            cats[i].render();
        }
    }
    catBtn.removeEventListener('click', showCat);
}