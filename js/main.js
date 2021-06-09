
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

// Create playerPlay function
function playerSelection() {

    // Prompt user for selection as string with no case sensitivity
    let selection = prompt("Rock, Paper or Scissors?", "");
    
    // Return selection based on input
    if (selection.toLowerCase() === "rock") {
        return "rock";
    } 

    else if (selection.toLowerCase() === "paper") {
        return "paper";
    }

    else if (selection.toLowerCase() === "scissors") {
        return "scissors";
    }

    // Notify user if input is incorrect
    else {
        alert("Please check spelling and try again.")
    }
}

console.log(playerSelection());

// Create playRound function
// Compare computerSelection and playerSelection to determine winner
// Return result
// Create game function that runs playRound function x5 times
// console.log result of each round
// console.log final winner out of 5 rounds