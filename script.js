function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lost! Paper beats rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lost! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lost! Rock beats Scissors!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "You won! " + playerSelection + " beats " + computerSelection;
    }
}


// const playerSelection = window.prompt()
const computerSelection = getComputerChoice();
console.log("Computer chooses " + computerSelection);
console.log("player chooses " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
