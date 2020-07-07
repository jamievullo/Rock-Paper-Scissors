//event listeners for all of the buttons
let Rock = document.getElementById('rock').addEventListener('click', runGame);
let Paper = document.getElementById('paper').addEventListener('click', runGame);
let Scissors = document.getElementById('scissors').addEventListener('click', runGame);

// post results to correesponding divs
let playerResult = document.getElementById('player');
let computerResult = document.getElementById('computer');
let result = document.getElementById('result');

let playerPick;
let computerPick;

function runGame() {
    // all game functionality
    playerPick = event.target.innerText.toLowerCase()
    console.log(playerPick)
    computerRandomPickGenerator()
    compareChoices()
}

function computerRandomPickGenerator() {
    // generate random number and compare to set value and assign too result
    let randomNumberGenerator = Math.random();
    console.log(randomNumberGenerator)
    randomNumberGenerator <= 0.33 ? computerPick = "rock" : 
    randomNumberGenerator > 0.33 && randomNumberGenerator <= 0.67 ? computerPick = "paper" : computerPick = "scissors"    
    console.log(computerPick)
}

function compareChoices() {
    player.innerHTML = "Player chose: " + playerPick
    computer.innerHTML = "Computer chose: " + computerPick

    switch(playerPick !== computerPick) {
        case playerPick === computerPick: 
            result.innerText = "Draw"
        case playerPick === "rock" && computerPick === "paper":
            result.innerText = "Defeat"
        case playerPick === "rock" && computerPick === "scissors":
            result.innerText = "You Are Victorious"
        case playerPick === "scissors" && computerPick === "rock":
            result.innerText = "Defeat"
        case playerPick === "scissors" && computerPick === "paper":
            result.innerText = "You Are Victorious"
        case playerPick === "paper" && computerPick === "scissors":
            result.innerText = "Defeat"
        case playerPick === "paper" && computerPick === "rock":
            result.innerText = "You Are Victorious"
        default:
            console.log("something is wrong")
    }
    console.log(result.innerText)

}