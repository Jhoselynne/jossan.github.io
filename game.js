function guess() {
    var guessedNumber = document.getElementById("guessedNumber").value;
    var secretNumber = sessionStorage.getItem('secretNumber');
    var counter = parseInt(sessionStorage.getItem('counter'));
    
    counter += 1;
    sessionStorage.setItem('counter', counter);
    counterMessage = "Number of times guessed: " + counter;

    var hintMessage = "";
    if(guessedNumber < secretNumber) {
        hintMessage = "Nope! Number to low, guess higher!";
    } else if (guessedNumber > secretNumber) {
        hintMessage = "Nope! Number to high, guess lower!";
    } else {
        hintMessage = "Congratulations! You guessed the number!";
    }

    document.getElementById("result").innerHTML = counterMessage + "<br />" + hintMessage;
}

function gameStart() {
    const generatedNumber = Math.floor(Math.random() * 100);
    sessionStorage.setItem('secretNumber', generatedNumber);
    sessionStorage.setItem('counter', 0);
}

gameStart();
