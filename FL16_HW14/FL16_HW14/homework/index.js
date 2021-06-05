// START TASK 1: Your code goes here
document.querySelector('tbody')
    .addEventListener('click', (evt) => {
        if (evt.target.parentElement.children[0] === evt.target) {
            evt.target.parentElement.style.backgroundColor = 'blue'
        } else if (evt.target.classList.contains('special')) {
            evt.currentTarget.style.backgroundColor = 'yellow';
        } else {
            evt.target.style.backgroundColor = 'yellow'
        }
    });
// END TASK 1

// START TASK 2: Your code goes here
const wrong = document.querySelector('.wrong');
const success = document.querySelector('.success');
const sendBtn = document.querySelector('.sendBtn');
const input = document.querySelector('input');
const regExp = /^\+380\d{9}$/;

input.addEventListener('input', evt => check(evt.target.value));

sendBtn.addEventListener('click', evt => send(evt));


function check(inputValue) {
    if (regExp.test(inputValue)) {
        wrong.classList.add('hide');
        sendBtn.removeAttribute('disabled');
        input.classList.remove('input-wrong');
    } else if (inputValue === '') {
        wrong.classList.add('hide');
        input.classList.remove('input-wrong');
    } else {
        success.classList.add('hide');
        wrong.classList.remove('hide');
        input.classList.add('input-wrong');
        sendBtn.setAttribute('disabled', 'true');
    }
}

function send(event) {
    event.preventDefault();
    success.classList.remove('hide');
}

// END TASK 2

//  START TASK 3: Your code goes here
const court = document.querySelector('.court');
const ball = document.querySelector('.ball');
const scoreA = document.querySelector('.team-a');
const scoreB = document.querySelector('.team-b');
let counterA = 0;
let counterB = 0;
// const ballDefaultY = 145;
// const ballDefaultX = 287;

court.addEventListener('click', evt => {
    moveBall(evt);
});

function moveBall(event) {
    if (!event.target.classList.contains('court-goal')) {
        ball.style.left = event.layerX - 20 + 'px';
        ball.style.top = event.layerY - 20 + 'px';
    } else {
        ball.style.left = event.target.offsetLeft - 20 + 'px';
        ball.style.top = event.target.offsetTop - 20 + 'px';
        counter(event);
    }
}

function counter(event) {
    if (event.target.classList.contains('court-goal-a')) {
        document.getElementById('team-b').remove();
        counterB++;
        const scoreMessageB = document.createElement('p');
        scoreMessageB.setAttribute('id', 'team-b')
        scoreMessageB.textContent = `Team B: ${counterB}`;
        scoreB.append(scoreMessageB);

    } else if (event.target.classList.contains('court-goal-b')) {
        document.getElementById('team-a').remove();
        counterA++;
        const scoreMessageA = document.createElement('p');
        scoreMessageA.setAttribute('id', 'team-a')
        scoreMessageA.textContent = `Team A: ${counterA}`;
        scoreA.prepend(scoreMessageA);
    }

}


/* END TASK 3 */
