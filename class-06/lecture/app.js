'use strict';

let cars = ['kia', 'spectra', 5000, 2002, ['shihab', 'mohammad', 'khaled']];

// let car = {
//     model: 'kia',
//     type: 'spectra',
//     price: 5000
// }
// console.log(cars[0]);

let shihab = {
    // 'user name': 'shihab',
    userName: 'shihab',
    age: 35,
    loveCoding: true,
    foodLikes: ['mansaf', 'shawarmah', 'maglobeh'],
    sayHi: function () {
        console.log(`hi my name is ${shihab.userName}`);
        // console.log(`hi my name is ${this.userName}`);
    },
    services: {
        serviceName: 'front-end',
        level: 'mid level',
        salary: 2000,
        place: 'jordan'
    }
}
let abd = {
    // 'user name': 'abd',
    userName: 'abd',
    age: 35,
    loveCoding: true,
    foodLikes: ['mansaf', 'shawarmah', 'maglobeh'],
    sayHi: function () {
        console.log(`hi my name is ${abd.userName}`);
        // console.log(`hi my name is ${this.userName}`);
    },
    services: {
        serviceName: 'front-end',
        level: 'mid level',
        salary: 2000,
        place: 'jordan'
    }
}
abd.sayHi();

// console.log(shihab);
// console.log(shihab.age);
// // console.log(shihab.'user name');
// console.log(shihab['age']);
// console.log(shihab['user name']);
shihab.sayHi();
// console.log(shihab.services.serviceName);

// console.log(shihab.foodLikes);
// for (let i = 0; i < shihab.foodLikes.length; i++) {
//     console.log(shihab.foodLikes[i]);
// }

let ahmad = {
    userName: 'ahmad',
    age: 25,
    loveCoding: false,
    foodLikes: ['mansaf', 'shawarmah', 'maglobeh'],
    sayHi: function () {
        console.log(`hi my name is ${this.userName}`);
    },
    services: {
        serviceName: 'back-end',
        level: 'mid level',
        salary: 1000,
        place: 'jordan'
    }
}

ahmad.sayHi();
ahmad.age = 27;
console.log(ahmad);
ahmad.talk = function () {
    console.log('hello everyone');
}
ahmad.talk();
delete ahmad.loveCoding;
console.log(ahmad);
ahmad.services.salary += 100;
console.log(ahmad);

const pie = 3.14;
// pie = 3;
const car = {
    carModel: 'kia'
}
car.carModel = 'bmw';
// car = 'ford';
car.price = 5000;
console.log(car);