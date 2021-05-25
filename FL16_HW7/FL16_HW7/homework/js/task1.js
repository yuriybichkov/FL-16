// Your code goes here
'use strict';
let moneyAmount;
let yearsNumber;
let percentage;
let profit;
let totalProfit = 0;
let totalAmount;

do {
    moneyAmount = parseFloat(parseFloat(prompt('Input initial amount of money')).toFixed(2));
    if (isNaN(moneyAmount) || moneyAmount < 1000) {
        alert('Invalid input data')
    } else {
        // console.log("-> moneyAmount", moneyAmount);
    }
} while (isNaN(moneyAmount) || moneyAmount < 1000);
// console.log('true ' + moneyAmount);

do {
    yearsNumber = parseInt(prompt('Input number of years'));
    if (isNaN(yearsNumber) || yearsNumber < 1) {
        alert('Invalid input data')
    } else {
        // console.log("-> yearsNumber", yearsNumber);
    }
} while (isNaN(yearsNumber) || yearsNumber < 1);
// console.log('true ' + yearsNumber);

do {
    percentage = parseInt(prompt('Input percentage of a year'));
    if (isNaN(percentage) || percentage > 100 || percentage < 1) {
        alert('Invalid input data')
    } else {
        // console.log("-> percentage", percentage);
    }
} while (isNaN(percentage) || percentage > 100 || percentage < 1);
// console.log('true ' + percentage);

totalAmount = moneyAmount;
for (let i = 1; i <= yearsNumber; i++) {
    // console.log('year ' + i);
    profit = totalAmount * percentage / 100;
    // console.log("-> profit", profit);
    totalProfit += profit;
    // console.log("-> totalProfit", totalProfit);
    totalAmount = moneyAmount + totalProfit;
    // console.log("-> moneyAmount", moneyAmount);
    // console.log("-> totalAmount", totalAmount);
}
alert(`Initial amount: ${moneyAmount}
Number of years: ${yearsNumber}
Percentage of year: ${percentage}

Total profit: ${totalProfit.toFixed(2)}
Total amount: ${totalAmount.toFixed(2)}`)
