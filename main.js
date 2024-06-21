const input = document.querySelector("input")
const startButton = document.querySelector("#start")
const registerButton = document.querySelector("#register")

function playerChoice() {
    return input.value
}

function computerChoice() {
    const options = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
}

function startGame() {
    const player = playerChoice()
    const computer = computerChoice()
    playRound(player, computer)
}

startButton.addEventListener("click", () => {
    startGame()
});

function playRound(player, computer) {
    const p = document.createElement("p")
    p.textContent = `The choice of the player is ${player} and of the computer is ${computer}`
    document.body.appendChild(p)
    if (player === computer) {
        const tie = document.createElement("p")
        tie.textContent = "it is a tie"
        document.body.appendChild(tie)
    } else {
        if ((player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")) {
            const playerWin = document.createElement("p")
            playerWin.textContent = "player wins"
            document.body.appendChild(playerWin)
        } else {
            const computerWin = document.createElement("p")
            computerWin.textContent = "computer wins"
            document.body.appendChild(computerWin)
        }
    }
}

registerButton.addEventListener("click", () => {
    startGame()
});
