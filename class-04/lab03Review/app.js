'use strict';
// let correctNumber = 5;
// for (let i = 1; i <= 4; i++) {
//     let num = Number(prompt('enter my fav number'));
//     if (num > correctNumber) {
//         alert('too high');
//     } else if (num < correctNumber) {
//         alert('too low');
//     } else if (num === correctNumber) {
//         alert('correct');
//         break;
//     }
//     if (i === 4) {
//         alert(`the correct answer = ${correctNumber}`);
//         // alert('the correct answer = ' + correctNumber);
//     }
// }

//i = 1 >>> num = 2
//i = 2 >>> num = 3
// i = 3 >>> num = 4
// i = 4 >>> num = 7 

let score = 0;
let favFruit = ['apple', 'orange', 'banana'];
let q7;
let correct = false;
// i = 2 o
for (let i = 1; i <= 6; i++) {
    q7 = prompt('can you tell me any of my favFruits');
    for (let j = 0; j < favFruit.length; j++) {
        if (q7 === favFruit[j]) {
            alert('correct');
            // i = 7;
            correct = true;
            score++;
            break;
        }
    }
    if (correct) {
        break;
    }
}

alert(`your score is ${score} out of 7`)