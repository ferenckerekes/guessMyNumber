'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

// the check click event
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    
    //When there is no number input
    if(!guess) {
        document.querySelector('.message').textContent = "No number!";
        
        //when the player wins the game
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct number!";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
        //when guess is too high
    } else if(guess > secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = "Too hight!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lose the game!";
        }

        //when guess is too low
    } else if(guess < secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = "Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lose the game!";
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
    document.querySelector('.message').textContent = 'Start guessing...';

});