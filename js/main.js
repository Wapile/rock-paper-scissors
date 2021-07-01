

// Set variables and query selectors

let x = 0;
let y = 0;

let computerSelection = '';
let playerSelection = '';

const buttons = document.querySelectorAll('button');

const container = document.querySelector('#container');
// divResults.classList.add('results');
const score = document.createElement('div');
const divResults = document.createElement('div');
container.appendChild(score);
container.appendChild(divResults);




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
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = playerPlay(button.textContent);
        // playerPlay(playerSelection);
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
        divResults.textContent = "It's a tie! Go again.";
    }

    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        x = ++x;
        divResults.textContent = `You win! Your ${playerSelection} beats ${computerSelection}.`;
    }

    else {
        y = ++y;
        divResults.textContent = `You lose. Your ${playerSelection} loses to ${computerSelection}.`;
    }
    
    score.textContent = `CURRENT SCORE -- You: ${x}  Computer: ${y}`;
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






