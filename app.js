var randomNumber = Math.floor(Math.random() * 10) + 1;
var guesses = document.querySelector('.guesses');
var LastResult = document.querySelector('.lastResult');
var LowOrHigh = document.querySelector('.LowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var guessButton;

guessField.focus()

function checkguess () {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if(userGuess === randomNumber) {
        LastResult.textContent = 'Congratulations! You got it right!';
        LastResult.style.backgroundColor = 'green';
        LowOrHigh.textContent = '';
        setGameOver()
    } else if(guessCount === 5) {
        LastResult.textContent = '!!!GAME OVER!!!';
        LowOrHigh.textContent = '';
        setGameOver();
    } else {
        LastResult.textContent = 'Wrong!';

        if(userGuess < randomNumber) {
            LowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            LowOrHigh.textContent = 'Last guess was too high!';
        }

        LastResult.backgroundColor = 'red';
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}


guessSubmit.addEventListener('click', checkguess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCounter = 1;

    var resetParas = document.querySelector('.resultParas p');
    for(var i = 0; i <resetParas.Length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value =  '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber);