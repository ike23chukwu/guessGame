const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('submit').addEventListener('click', guess);

function guess() {
    const userGuess = parseInt(document.getElementById('guess').value);


    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('please ente a valid number between 1 and 100!');
        return
    }

    if (userGuess < randomNumber) {

        document.getElementById('result').innerHTML = 'Too low! Try again!';
    } else if (userGuess > randomNumber) {

        document.getElementById('result').innerHTML = 'Too high! Try again!';
    } else {

        document.getElementById('result').innerHTML = 'Congratulations! You guessed the number!';
        attempts = 0;
    }

    attempts--;

    document.getElementById('attempt-count').innerHTML = attempts;

    if (attempts === 0) {

        document.getElementById('result').innerHTML = 'Game over! The number was ' + randomNumber;
    }
}

document.getElementById('reset').addEventListener('click', resetGame);

function resetGame() {
    attempts = 3;

    document.getElementById('guess').value = '';

    document.getElementById('guess').innerHTML = '';

    document.getElementById('attempt-count').innerHTML = attempts;
    randomNumber =
        Math.floor(Math.random() * 100) + 1;
}