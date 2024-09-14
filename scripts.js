const result = document.querySelector('.result')
const humanScore = document.querySelector('#humanScore')
const machineScore = document.querySelector('#machineScore')

let humanScoreNumber = 0
let machineScoreNumber = 0 

/*
humanScoreNumber -> Camel case
GAME_OPTIONS -> Snake case 
*/


//ENUNS
const GAME_OPTONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const playHuman = (humanChoice) => {

    playtheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playtheGame = (human, machine) => {

    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++ 
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++ 
        machineScore.innerHTML = machineScoreNumber 
        result.innerHTML = "Você perdeu para o Sotware!"
    }
}

