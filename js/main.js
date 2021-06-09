// Set score variables to track score outside of function for global scope
let x = 0;
let y = 0;

// Create game function that runs playRound function x5 times
function game() {

    for (i = 0; i < 5; i++) {


        // Create playRound function
        function playRound() {


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
                function playerPlay() {

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


            // Set function returns to variables for later
            const computerSelection = computerPlay();
            const playerSelection = playerPlay();

            // Print computer and player selections
            console.log(`Computer Selection = ${computerSelection}`);
            console.log(`Your Selection = ${playerSelection}`);


            // Compare computerSelection and playerSelection to determine winner
            // Return winner or tie
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

        // Print result of each round
        console.log(playRound());
        // Print current score after each round
        console.log(`CURRENT SCORE -- You: ${x}  Computer: ${y}`)
    }
}

// Compare scores after 5 rounds
function compareScore () {
    if (x > y) {
        return "You're the winner! Congrats!"
    }

    else if (y > x) {
        return "You lose :( Better luck next time!"
    }

    else {
        return "It's a tie!  What're the chances of that?"
    }
}

console.log(game());
// Print final winner out of 5 rounds
console.log(compareScore());






