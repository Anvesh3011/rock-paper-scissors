const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const userScore = document.getElementById("user-score");
let UScore = 0;
let CScore = 0;
const computerScore = document.getElementById("computer-score");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlayer());
  });
});

function computerPlayer() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    CScore++;
    computerScore.textContent = CScore;
    result.textContent = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    UScore++;
    userScore.textContent = UScore;
    result.textContent = "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    UScore++;
    userScore.textContent = UScore;
    result.textContent = "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    CScore++;
    computerScore.textContent = CScore;
    result.textContent = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    CScore++;
    computerScore.textContent = CScore;
    result.textContent = "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    UScore++;
    userScore.textContent = UScore;
    result.textContent = "You win! Scissors beats paper.";
  }
}
