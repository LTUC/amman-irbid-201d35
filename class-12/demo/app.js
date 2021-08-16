'use strict';
let attemptEl = document.getElementById('attempts');
let container = document.getElementById('image-container');
let leftImg = document.getElementById('leftImg');
let rightImg = document.getElementById('rightImg');
let result = document.getElementById('results');
let goatsImages = ['cruisin-goat.jpg', 'float-your-goat.jpg', 'goat-away.jpg', 'goat-out-of-hand.jpg', 'kissing-goat.jpg', 'sassy-goat.jpg', 'smiling-goat.jpg', 'sweater-goat.jpg'];
let maxAttempts = 10;
let attempt = 1;
let goats = [];
let gNames = [];
let votes = [];
let views = [];
function GoatImage(goatName) {
    this.gName = goatName.split('.')[0];
    this.gImg = `images/${goatName}`;
    this.votes = 0;
    this.views = 0;
    goats.push(this);
    gNames.push(this.gName);
}

// let goat1 = new GoatImage('cruisin-goat.jpg');
// let goat2 = new GoatImage('float-your-goat.jpg');

for (let i = 0; i < goatsImages.length; i++) {
    new GoatImage(goatsImages[i]);
}

console.log(goats);
function randomImage() {
    return Math.floor(Math.random() * goats.length);//0-1
    //0.6 0.04
    // 0-goats.length
}
let leftIndex;
let rightIndex;
function renderImg() {
    leftIndex = randomImage();//0
    rightIndex = randomImage();//5
    while (leftIndex === rightIndex) {
        leftIndex = randomImage();
    }
    leftImg.setAttribute('src', goats[leftIndex].gImg);
    rightImg.setAttribute('src', goats[rightIndex].gImg);
    goats[leftIndex].views++;
    goats[rightIndex].views++;
}
renderImg();

leftImg.addEventListener('click', clickHandler);
rightImg.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (attempt <= maxAttempts) {
        let clickedImage = event.target.id;
        if (clickedImage === 'leftImg') {
            goats[leftIndex].votes++;
        } else if (clickedImage === 'rightImg') {
            goats[rightIndex].votes++
        }
        renderImg();
        console.log(goats);
        attempt++;
    } else {
        // result
        for (let i = 0; i < goats.length; i++) {
            let liEl = document.createElement('li');
            result.appendChild(liEl);
            liEl.textContent = `${goats[i].gName} has ${goats[i].votes} votes and  ${goats[i].views} views.`;
            votes.push(goats[i].votes);
            views.push(goats[i].views);
        }
        leftImg.removeEventListener('click', clickHandler);
        rightImg.removeEventListener('click', clickHandler);
        chartRender();
    }
}

function chartRender() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gNames,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }, {
                label: '# of views',
                data: views,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
