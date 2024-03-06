/* 
Main Plan:
    - Player inputs "rock", "paper" or "scissor";
    - The player wins or loses depending on the computer's choice;
    - The results of the match and the score are displayed to the player;
    - This repeats 5 times;
    - If the player scores 3 or more points they win, if not - they lose the game.
*/

function computerChoose() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playerChoose() {
    while (true) {
        let playerChoice = prompt("Enter your move: ").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            return playerChoice;
        } else {
            console.log("Incorrect input. Your options are: [rock], [paper] or [scissors]. Try again.")
        }
    }
}

function singleGame(playerChoice, computerChoice) {
    if ((playerChoice === "rock" & computerChoice === "paper")
        || (playerChoice === "paper" & computerChoice === "scissors")
        || (playerChoice === "scissors" & computerChoice === "rock")) {
            return "lose";
    } else if (playerChoice === computerChoice) {
        return "tie";
    } else {
        return "win";
    }
}


function gameLoop() {
    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        let playerChoice = playerChoose();
        let computerChoice =  computerChoose();
        let result = singleGame(playerChoice, computerChoice);

        if (result === "win") {
            playerScore++
            console.log(`Computer played ${computerChoice}. \n${playerChoice} beats ${computerChoice}. You Win! \nPlayer: ${playerScore}; Computer: ${computerScore}`);
        } else if (result === "lose") {
            computerScore++
            console.log(`Computer played ${computerChoice}. \n${computerChoice} beats ${playerChoice}. You Lose! \nPlayer: ${playerScore}; Computer: ${computerScore}`);
        } else {
            console.log(`You both played ${playerChoice}. Tie!`);
        }
        
        if (playerScore === 3) {
            console.log("You won the game! Congratulations!");
            break;
        } else if (computerScore === 3) {
            console.log("You lost the game! Better luck next time!");
            break;
        }
    }
}

//gameLoop();


