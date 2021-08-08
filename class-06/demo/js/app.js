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

let container = document.getElementById('kittenProfiles');

let frankie = {
    catName: 'frankie',
    age: 0,
    likes: ['eating', 'sleeping', 'playing'],
    image: `images/frankie.jpeg`,
    gwk: true,
    gwd: false,
    gwc: true,
    breed: 'balde',
    getAge: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.catName;
        let pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.likes.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.likes[i];
        }
        let imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);
        imgEl.setAttribute('src', this.image);
    }
}

frankie.getAge(1, 8);
console.log(frankie);
frankie.render();

let jumper = {
    catName: 'jumper',
    age: 0,
    likes: ['eating', 'fighting', 'playing'],
    image: `images/jumper.jpeg`,
    gwk: true,
    gwd: true,
    gwc: false,
    breed: 'balde',
    getAge: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.catName;
        let pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.likes.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.likes[i];
        }
        let imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);
        imgEl.setAttribute('src', this.image);
    }

}
jumper.getAge(1, 8);
jumper.render();
console.log(jumper);
// <article>
//   <h2></h2>
//   <p></p>
//   <ul>
//     <li></li>
//   </ul>
//   <img>
// </article> 

let serena = {
    catName: 'serena',
    age: 0,
    likes: ['eating', 'fighting', 'playing'],
    image: `images/serena.jpeg`,
    gwk: true,
    gwd: true,
    gwc: false,
    breed: 'balde',
    getAge: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    },
    render: function () {
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.catName;
        let pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `my name is ${this.catName} and i'm ${this.age} months old`;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.likes.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.likes[i];
        }
        let imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);
        imgEl.setAttribute('src', this.image);
    }

}
serena.getAge(1, 8);
serena.render();