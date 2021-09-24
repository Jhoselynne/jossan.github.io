// Funktionsdeklaration
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

// Funktionsdeklaration
function gameStart() {
    const generatedNumber = Math.floor(Math.random() * 100);
    sessionStorage.setItem('secretNumber', generatedNumber);
    sessionStorage.setItem('counter', 0);
}

// Funktionsanrop
gameStart();

// ##### document + event listener #####

document.getElementById("knapp1").addEventListener("click", function () {
    console.log("Rätt");
    document.getElementById("answer").innerHTML="<h2> Rätt svar! </h2>";
})

document.getElementById("knapp2").addEventListener("click", function () {
    console.log("Fel");
    document.getElementById("answer").innerHTML="<h2> Fel svar :( </h2>";
})

// ##### FOR-LOOP #####

function repeat() {
    var my_reps = document.getElementById("reps").value;
    console.log("Antal gånger att upprepa: " + my_reps);

    for (let i = 0; i < my_reps; i++) {
        console.log("Hej");
        document.getElementById("reps_answer").innerHTML += "Hej ";
    }
}

// ##### TRY-CATCH #####

function crash() {
    try {
        somethingThatCrashes;
    } catch (error) {
        console.error("My own defined error message");
        console.error(error);
    }
}
