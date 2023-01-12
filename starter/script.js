'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

// the check click event
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    
    //When there is no number input
    if(guess === undefined) {
        displayMessage("No number!");

        //when the player wins the game
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? "Too hight!" : "Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lose the game!");
            document.querySelector('.score').textContent = 0;
        }
    //when the player wins the game
    } else if(guess === secretNumber) {
        displayMessage("Correct number!");
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});

//the again click 
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.background = '#222';
    displayMessage('Start guessing...');

});