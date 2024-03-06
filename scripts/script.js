const ROCK_IMAGE_DIR = "./images/rock.png";
const PAPER_IMAGE_DIR = "./images/paper.png";
const SCISSORS_IMAGE_DIR = "./images/scissors.png";

const buttons = document.querySelectorAll("button");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");
const playerMoveImage = document.querySelector(".player.move img");
const computerMoveImage = document.querySelector(".computer.move img");
const resultText = document.querySelector(".result-text");

function computerChoose() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerMoveImage.setAttribute("src", ROCK_IMAGE_DIR);
            return "rock";
        case 1:
            computerMoveImage.setAttribute("src", PAPER_IMAGE_DIR);
            return "paper";
        case 2:
            computerMoveImage.setAttribute("src", SCISSORS_IMAGE_DIR);
            return "scissors";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerMoveImage.setAttribute("src", `./images/${button.id}.png`);
        singleGame(button.id, computerChoose());
    });
});

function singleGame(playerChoice, computerChoice) {
    if ((playerChoice === "rock" & computerChoice === "paper")
        || (playerChoice === "paper" & computerChoice === "scissors")
        || (playerChoice === "scissors" & computerChoice === "rock")) {
            computerScoreCounter.textContent = +computerScoreCounter.textContent + 1;
            resultText.textContent = "You Lose!";
            return "lose";
    } else if (playerChoice === computerChoice) {
        resultText.textContent = "Tie!";
        return "tie";
    } else {
        resultText.textContent = "You Win!";
        playerScoreCounter.textContent = +playerScoreCounter.textContent + 1;
        return "win";
    }
}


// function gameLoop() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while (true) {
//         let playerChoice = playerChoose();
//         let computerChoice =  computerChoose();
//         let result = singleGame(playerChoice, computerChoice);

//         if (result === "win") {
//             playerScore++
//             console.log(`Computer played ${computerChoice}. \n${playerChoice} beats ${computerChoice}. You Win! \nPlayer: ${playerScore}; Computer: ${computerScore}`);
//         } else if (result === "lose") {
//             computerScore++
//             console.log(`Computer played ${computerChoice}. \n${computerChoice} beats ${playerChoice}. You Lose! \nPlayer: ${playerScore}; Computer: ${computerScore}`);
//         } else {
//             console.log(`You both played ${playerChoice}. Tie!`);
//         }
        
//         if (playerScore === 3) {
//             console.log("You won the game! Congratulations!");
//             break;
//         } else if (computerScore === 3) {
//             console.log("You lost the game! Better luck next time!");
//             break;
//         }
//     }
// }
