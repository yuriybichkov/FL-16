// Your code goes here
'use strict';
const form = document.querySelector('.container');
const userName = document.querySelector('#username');
const time = document.querySelector('#time');
const place = document.querySelector('#place');
const confirmBtn = document.querySelector('#confirm');
const convertBtn = document.querySelector('#convert');
const timeRule = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
const hrPerDol = 27.4368;
const hrPerEur = 33.5319;


let eventName = prompt('Input event name', ['meeting']);
if (eventName) {
    form.classList.toggle('hide')
}

confirmBtn.addEventListener('click', valid)
convertBtn.addEventListener('click', moneyAmount)


function valid() {
    if (userName.value === '' || time.value === '' || place.value === '') {
        alert('Input all data')
    } else if (!timeRule.test(time.value)) {
        alert('Enter time in format hh:mm')
    } else {
        alert(`${userName.value} has a ${eventName} today at ${time.value} somewhere in ${place.value}`)
    }
}

function moneyAmount() {
    let euroAmount;//prompt('Input amount of euro');
    let dollarAmount;//= prompt('Input amount of dollar');
    do {
        euroAmount = prompt('Input amount of euro');
        if (isNaN(euroAmount) || euroAmount < 0) {
            alert('Invalid input data')
        } else if (euroAmount === null) {
            return
        }
    } while (isNaN(euroAmount) || euroAmount < 0);
    do {
        dollarAmount = prompt('Input amount of dollar');
        if (isNaN(dollarAmount) || dollarAmount < 0) {
            alert('Invalid input data')
        } else if (dollarAmount === null) {
            return;
        }
    } while (isNaN(dollarAmount) || dollarAmount < 0);
    let hrnEqEur = (euroAmount * hrPerEur).toFixed(2);
    let hrnEqDol = (dollarAmount * hrPerDol).toFixed(2);
    alert(`${euroAmount} euros are equal ${hrnEqEur}hrns, ${dollarAmount} dollars are equal ${hrnEqDol}hrns`);
}
