

// Set score variables to track score outside of function for global scope
let x = 0;
let y = 0;

const buttons = document.querySelectorAll('button');


// // Create game function that runs playRound function x5 times
// function game() {

//     for (i = 0; i < 100; i++) {



// computerPlay function gives randomized selection
function computerPlay() {

    randomizer = Math.floor(Math.random() * 3);

    if (randomizer === 0) {
        return "rock";
    }

    else if (randomizer === 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

// playerPlay function converts button input to lowercase variable
function playerPlay(selection) {

    if (selection.toLowerCase() === "rock") {
       return "rock";
    } 

    else if (selection.toLowerCase() === "paper") {
       return "paper";
    }

    else if (selection.toLowerCase() === "scissors") {
       return "scissors";
    }
};


let computerSelection = '';
let playerSelection = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        playerPlay(playerSelection);
        computerSelection = computerPlay();
        playRound();
    });
});

// const playerSelection = playerPlay();


// Print computer and player selections
// console.log(`Computer Selection = ${computerSelection}`);
// console.log(`Your Selection = ${playerSelection}`);


// Compare computerSelection and playerSelection to determine winner
// Return winner or tie
function playRound(result) {

    console.log(`Computer Selection = ${computerSelection}`);
    console.log(`Your Selection = ${playerSelection}`);

    if (playerSelection === computerSelection) {
        return "It's a tie! Go again.";
    }

    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        x = ++x;
        return `You win! Your ${playerSelection} beats ${computerSelection}.`;
    }

    else {
        y = ++y;
        return `You lose. Your ${playerSelection} loses to ${computerSelection}.`;
    }
}

// console.log(playRound());



        // Print result of each round
        // console.log(playRound());
        // Print current score after each round
        // console.log(`CURRENT SCORE -- You: ${x}  Computer: ${y}`)
    


// Compare scores after 5 rounds
// function compareScore () {
//     if (x > y) {
//         return "You're the winner! Congrats!"
//     }

//     else if (y > x) {
//         return "You lose :( Better luck next time!"
//     }

//     else {
//         return "It's a tie!  What're the chances of that?"
//     }
// }


// console.log(playRound);

// console.log(game());
// Print final winner out of 5 rounds
//console.log(compareScore());






