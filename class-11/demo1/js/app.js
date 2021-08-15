'use strict';
let audioEl = document.getElementById('song');
let spanEl = document.getElementById('theVolume');
let btnEl = document.getElementById('random');

btnEl.addEventListener('click', randomVolume);

function randomVolume(event) {
    let randomNumber = Math.random();//0-1
    spanEl.textContent = randomNumber;
    audioEl.volume = randomNumber;
}

