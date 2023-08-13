function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  if (rand == 0) {
    return "rock";
  } else if (rand == 1) {
    return "paper";
  }
  return "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (map.get(playerSelection) == computerSelection) {
    return "player";
  } else if (playerSelection != computerSelection) {
    return "computer";
  }
  return "tie";
}

function game() {
  play = 5;
  playerWins = 0;
  computerWins = 0;

  while (play > 0) {
    let result = playRound(playerSelection, getComputerChoice());

    if (result != "tie") {
      if (result == "player") {
        playerWins++;
      } else {
        computerWins++;
      }
      play--;
    }
  }

  return playerWins > computerWins ? "player wins" : "computer wins";
}

const playerSelection = "rock";

const pairs = [
  ['rock', 'scissor'],
  ['paper', 'rock'],
  ['scissor', 'paper']
];
const map = new Map(pairs);
console.log(game());