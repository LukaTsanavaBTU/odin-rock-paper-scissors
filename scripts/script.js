const ROCK_IMAGE_DIR = "./images/rock.png";
const PAPER_IMAGE_DIR = "./images/paper.png";
const SCISSORS_IMAGE_DIR = "./images/scissors.png";

const buttons = document.querySelectorAll(".choice-buttons button");
const playerScoreCounter = document.querySelector("#player-score");
const computerScoreCounter = document.querySelector("#computer-score");
const playerMoveImage = document.querySelector(".player.move img");
const computerMoveImage = document.querySelector(".computer.move img");
const resultText = document.querySelector(".result-text");
const resultContainer = document.querySelector(".result-container");

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
    let winningScore = 5;
    if ((playerChoice === "rock" & computerChoice === "paper")
        || (playerChoice === "paper" & computerChoice === "scissors")
        || (playerChoice === "scissors" & computerChoice === "rock")) {
            computerScoreCounter.textContent = +computerScoreCounter.textContent + 1;
            resultText.textContent = "You Lose!";
            finalChecker(winningScore)
            return "lose";
    } else if (playerChoice === computerChoice) {
        resultText.textContent = "Tie!";
        return "tie";
    } else {
        resultText.textContent = "You Win!";
        playerScoreCounter.textContent = +playerScoreCounter.textContent + 1;
        finalChecker(winningScore)
        return "win";
    }
}

function showFinalResult(result) {
    resultText.textContent = `You ${result} the game`;
    let tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("try-again");
    tryAgainButton.textContent = "Try Again";
    resultContainer.appendChild(tryAgainButton);
    tryAgainButton.addEventListener("click", tryAgain);
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

function tryAgain() {
    tryAgainButton = resultContainer.querySelector("button");
    resultContainer.removeChild(tryAgainButton);
    resultText.textContent = "Welcome To The Game!";
    playerScoreCounter.textContent = 0;
    computerScoreCounter.textContent = 0;
    buttons.forEach((button) => {
        button.disabled = false;
    })
}

function finalChecker(winningScore) {
    if (+computerScoreCounter.textContent === winningScore) {
        showFinalResult("Lost");
    } else if (+playerScoreCounter.textContent === winningScore) {
        showFinalResult("Won");
    }
}