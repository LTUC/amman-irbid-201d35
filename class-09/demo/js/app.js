// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects 

'use strict';
// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild
let kittens = [];
let container = document.getElementById('kittenProfiles');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function Kitten(catName, likes, image, gwk, gwd, gwc, breed) {
    this.name = catName;
    this.likes = likes;
    this.gwk = gwk;
    this.gwd = gwd;
    this.gwc = gwc;
    this.breed = breed;
    this.age = 0;
    this.image = image;
    kittens.push(this);
}
Kitten.prototype.getAge = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.age = Math.floor(Math.random() * (max - min + 1) + min);
}
Kitten.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.name;

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.age;

    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = this.likes;

    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = this.gwk;

    let tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    tdEl5.textContent = this.gwd;

    let tdEl6 = document.createElement('td');
    trEl.appendChild(tdEl6);
    tdEl6.textContent = this.gwc;

    let tdEl7 = document.createElement('td');
    // let span = document.createElement('span');
    trEl.appendChild(tdEl7);
    tdEl7.textContent = this.breed;
    // tdEl6.innerHTML = `<span id='hi'> ${this.breed} </span`;

    let tdEl8 = document.createElement('td');
    let image = document.createElement('img');
    image.setAttribute('src', this.image);
    tdEl8.appendChild(image);
    trEl.appendChild(tdEl8);
}


function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Cat Name';

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = 'Cat Age';

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = 'Cat Likes';

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = 'is good with kids';

    let thEl5 = document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent = 'is good with Dogs';

    let thEl6 = document.createElement('th');
    trEl.appendChild(thEl6);
    thEl6.textContent = 'is good with Cats';

    let thEl7 = document.createElement('th');
    trEl.appendChild(thEl7);
    thEl7.textContent = 'Cat breed';

    let thEl8 = document.createElement('th');
    trEl.appendChild(thEl8);
    thEl8.textContent = 'Cat image';

}

let myform = document.getElementById('myForm');
myform.addEventListener('submit', addCat);
function addCat(event) {
    event.preventDefault();
    let catName = event.target.name.value;
    let likes = event.target.likes.value.split(',');;
    let gwk = event.target.gwk.checked;
    let gwd = event.target.gwd.checked;
    let gwc = event.target.gwc.checked;
    // console.log(catName);
    // console.log(gwk);
    // console.log(gwd);
    // console.log(gwc);
    // console.log(likes);

    let breed = event.target.breed.value;
    let image = event.target.image.value;
    let newCat = new Kitten(catName, likes, image, gwk, gwd, gwc, breed);
    newCat.getAge(2, 7);
    newCat.render();
}
createTableHeader();
let frankie = new Kitten('frankie', ['eating', 'playing', 'sleeping'], 'images/frankie.jpeg', true, false, true, 'baldee');
frankie.getAge(2, 7);
let jumper = new Kitten('jumper', ['eating', 'playing', 'sleeping'], 'images/jumper.jpeg', true, true, true, 'baldee');
jumper.getAge(4, 10);
let serena = new Kitten('serena', ['eating', 'playing', 'sleeping'], 'images/serena.jpeg', true, false, true, 'baldee');
serena.getAge(2, 7);

for (let i = 0; i < kittens.length; i++) {
    kittens[i].render();
}
// new Kitten('frankie',)
// let frankie = {
//     catName: 'frankie',
//     age: 0,
//     likes: ['eating', 'sleeping', 'playing'],
//     image: `images/frankie.jpeg`,
//     gwk: true,
//     gwd: false,
//     gwc: true,
//     breed: 'balde',
//     getAge: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//     },
//     render: function () {
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.catName;
//         let pEl = document.createElement('p');
//         articleEl.appendChild(pEl);
//         pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.likes.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.likes[i];
//         }
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);
//         imgEl.setAttribute('src', this.image);
//     }
// }

// frankie.getAge(1, 8);
// console.log(frankie);
// frankie.render();

// let jumper = {
//     catName: 'jumper',
//     age: 0,
//     likes: ['eating', 'fighting', 'playing'],
//     image: `images/jumper.jpeg`,
//     gwk: true,
//     gwd: true,
//     gwc: false,
//     breed: 'balde',
//     getAge: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//     },
//     render: function () {
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.catName;
//         let pEl = document.createElement('p');
//         articleEl.appendChild(pEl);
//         pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.likes.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.likes[i];
//         }
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);
//         imgEl.setAttribute('src', this.image);
//     }

// }
// jumper.getAge(1, 8);
// jumper.render();
// console.log(jumper);
// <article>
//   <h2></h2>
//   <p></p>
//   <ul>
//     <li></li>
//   </ul>
//   <img>
// </article> 

// let serena = {
//     catName: 'serena',
//     age: 0,
//     likes: ['eating', 'fighting', 'playing'],
//     image: `images/serena.jpeg`,
//     gwk: true,
//     gwd: true,
//     gwc: false,
//     breed: 'balde',
//     getAge: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//     },
//     render: function () {
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.catName;
//         let pEl = document.createElement('p');
//         articleEl.appendChild(pEl);
//         pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.likes.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.likes[i];
//         }
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);
//         imgEl.setAttribute('src', this.image);
//     }

// }
// serena.getAge(1, 8);
// serena.render();