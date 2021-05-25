// Your code goes here
'use strict';

let randomNumber;
let pocketNumber;
let prize = 0;
let range = 8;
let maxPrize = 100;


function startGame(range, maxPrize) {
    if (confirm('Do you want to play a game?')) {
        game(range, maxPrize);
    } else {
        alert('You did not become a billionaire, but can.');
    }
}

function game() {
    // console.log("-> range", range);
    randomNumber = Math.floor(Math.random() * (range + 1));
    // console.log("-> randomNumber", randomNumber);
    let currentPrize = maxPrize;
    for (let i = 1; i <= 3; i++) {
        if (i === 3) {
            currentPrize /= 2;
        } else {
            currentPrize /= i;
        }
        pocketNumber = parseInt(prompt(
            `Choose a roulette pocket number from 0 to ${range}
        Attempts left: ${4 - i}
        Total prize: ${prize}$
        Possible prize on current attempt: ${currentPrize}$`));
        // console.log("-> pocketNumber", pocketNumber);
        if (pocketNumber === randomNumber) {
            prize += currentPrize;
            // console.log("-> prize", prize);
            alert(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
            range += 4;
            maxPrize *= 2;
            startGame(range, maxPrize);
            break;
        } else if (i === 3) {
            if (confirm(`Thank you for your participation. Your prize is: ${prize}$. Do you want to continue?`)) {
                startGame(range, maxPrize);
            }
        }
    }
}

startGame(range, maxPrize)
