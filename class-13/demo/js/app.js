'use strict';
let formEl = document.getElementById('orderForm');
let ulEl = document.getElementById('orders');
let orders = [];

function saveToLocalStorage() {
    let data = JSON.stringify(orders);
    localStorage.setItem('coffee', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('coffee');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) {
        orders = normalObj;
        renderOrders();
    }
}
readFromLocalStorage();
// JSON >>> javascript object notation

// let normalObj = {
//     stdName: 'shihab',
//     age: 35,
//     grade: 90
// }
// console.log('normal object ', normalObj);
// console.log('typeof normal object ', typeof normalObj);
// let stringObj = JSON.stringify(normalObj);
// console.log('string object ', stringObj);
// console.log('typeof string object ', typeof stringObj);
// let normalObj2 = JSON.parse(stringObj);
// console.log('normal object2 ', normalObj2);
// console.log('typeof normal object2 ', typeof normalObj2);
// localStorage.setItem('email', 'shihab@shihab.com');
// console.log('my email is ', localStorage.getItem('email'));
// localStorage.removeItem('email');
// localStorage.clear();


function Coffee(custName, size, milk, isHot, drinkType) {
    this.custName = custName;
    this.size = size;
    this.milk = milk;
    this.isHot = isHot;
    this.drinkType = drinkType;
    orders.push(this)
}
function makeOrder(event) {
    event.preventDefault();
    let custName = event.target.custName.value;
    let size = event.target.size.value;
    let milk = event.target.milk.value;
    let isHot = event.target.isHot.checked;
    let drinkType = event.target.drinkType.value;

    new Coffee(custName, size, milk, isHot, drinkType);
    renderOrders();
    saveToLocalStorage();
    console.log(orders);
}
formEl.addEventListener('submit', makeOrder);

function renderOrders() {
    ulEl.textContent = '';
    let liEl;
    for (let i = 0; i < orders.length; i++) {
        liEl = document.createElement('li');
        let temp;
        if (orders[i].isHot) {
            temp = 'hot';
        } else {
            temp = 'cold';
        }
        liEl.textContent = `${orders[i].custName} ordered ${temp} ${orders[i].size} OZ ${orders[i].drinkType} with ${orders[i].milk} milk.`
        ulEl.appendChild(liEl);
    }
}