const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".computerScore");

let playerScore = 0;
let computerScore = 0;

computerPlay = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissor";
  }
};

playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      playerScore++;
      yourScore.textContent = "Your score is " + playerScore;
    } else {
      computerScore++;
      compScore.textContent = "Computer score is " + computerScore;
    }
  }
  if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      playerScore++;
      yourScore.textContent = "Your score is " + playerScore;
    } else {
      computerScore++;
      compScore.textContent = "Computer score is " + computerScore;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      yourScore.textContent = "Your score is " + playerScore;
    } else {
      computerScore++;
      compScore.textContent = "Computer score is " + computerScore;
    }
  }

  if (playerScore == 5 || computerScore == 5) {
    alert("Game Over!");
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", e => {
    playRound(button.id, computerPlay());
  });
});
