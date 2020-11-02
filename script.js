//Remember, we're gonna use strict mode in all scripts
"use strict"
let maxRandom = 20; 
let check = document.querySelector('.check');
let secretValue = Math.floor(Math.random() * maxRandom + 1);
let score = maxRandom;
let highScore = 0;
document.querySelector('.score').textContent = score;
check.addEventListener('click', function () {
    let message = document.querySelector('.message');
    let inputValue = Number(document.querySelector('.guess').value);
    if (!inputValue) {
        message.textContent = 'Incorrect Input';
    } else if (secretValue === inputValue) {
        document.querySelector('.number').textContent = secretValue;
        message.textContent = 'Correct Guess';
        if (highScore < score) {
            highScore = score;
        }
        document.querySelector('body').style.backgroundColor = "#60b347";
    } else if (secretValue > inputValue) {
        message.textContent = 'Too Low';
        score = score - 1;
    } else {
        message.textContent = 'Too High';
        score = score - 1;
    }
    if(score < 1){
        document.querySelector('.number').textContent = "Game Over!";
        document.querySelector('.number').style.width = "auto";
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.message').textContent = "You failed to guess!";
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
});

let again = document.querySelector('.again');
again.addEventListener('click', function(){
    score = maxRandom;
    secretValue = Math.floor(Math.random() * maxRandom + 1);
    document.querySelector('.score').textContent = maxRandom;
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').style.width = "15rem";
});
