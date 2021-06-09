
// Create computerPlay function
function computerPlay() {

    // Create math random fuction returning number 0, 1 or 2
    // Round number down to integer
    randomizer = Math.floor(Math.random() * 3);

    // Assign Rock/Paper/Scissor value based on returned integer
    // Return result of random selection
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

console.log(computerPlay());


// Create playerPlay function
// Prompt user for selection as string with no case sensitivity
// Return selection as playerSelection variable
// Create playRound function
// Compare computerSelection and playerSelection to determine winner
// Return result
// Create game function that runs playRound function x5 times
// console.log result of each round
// console.log final winner out of 5 rounds