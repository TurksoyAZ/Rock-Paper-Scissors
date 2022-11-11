
//
const playerScorOutput = document.querySelector('#userScor')
const compScorOutput = document.querySelector('#compScor')
//
const roundScore = document.querySelector('#roundScore')
const roundTotalScore = document.querySelector('#roundTotalScore')
//
const textForPlayer = document.querySelector('#textForPlayer')
//
const reset = document.querySelector('#reset')
//
const forColors1 = document.querySelector('#forColors1')
const forColors2 = document.querySelector('#forColors2')
const forColors3 = document.querySelector('#forColors3')
//
const resultDisplayNone = document.querySelector('#resultDisplayNone')
const resultDisplayBlock = document.querySelector('#resultDisplayBlock')


// Id target.
let btn = document.querySelectorAll(".btn")

// Player and Computer Choice
let player_choice;
let computer_choice;

// Scors for Player and Computer
let playerScorValue = 0
let compScoreValue = 0


// Round
let roundChecked;
let roundCounter = 0


// For colors target. of img
let forColorElement;


// For which instruments
let forUser = '<sup><i>(user)</i></sup>'
let forComp = '<sup><i>(comp)</i></sup>'

// Which instruments for all players
function textName(letter) {
    if (letter === 'rock') return 'Rock'
    if (letter === 'paper') return 'Paper'
    return 'Scissors'
}


//user Check and play function
btn.forEach((btn_el) => {

    btn_el.addEventListener('click', (event) => {

        randomChoice()

        player_choice = event.target.id
        forColorElement = event.target

        radioSelect()
        checked()
        resultDisplay()
        winOrLosDisplay()

    })
})

//function for Round Start
const checked = () => {
    if (roundChecked >= roundCounter) {
        roundTotalScore.innerHTML = roundChecked
        roundCounter++
        roundScore.innerHTML = roundCounter

        tableId.style.display = 'none'
        roundId.style.display = 'block'

    }
}

// function for play
const resultDisplay = () => {
    if (computer_choice === player_choice) {
        textForPlayer.innerHTML = "That's Draw"
        // for color
        forColorElement.classList.add('grey-layer');
        setTimeout(() => {
            forColorElement.classList.remove('grey-layer')
        }, 300)
    }
    else if (computer_choice === 'rock' && player_choice === 'paper' ||
        computer_choice === 'paper' && player_choice === 'scissors' ||
        computer_choice === 'scissors' && player_choice === 'rock'
    ) {
        playerScorValue++
        playerScorOutput.innerHTML = playerScorValue
        textForPlayer.innerHTML = `${textName(player_choice)}${forUser} beats ${textName(computer_choice)}${forUser}  <br>You Win!`
        // for color
        forColorElement.classList.add('green-layer');
        setTimeout(() => {
            forColorElement.classList.remove('green-layer')
        }, 300)
    }
    else if (computer_choice === 'rock' && player_choice === 'scissors' ||
        computer_choice === 'scissors' && player_choice === 'paper' ||
        computer_choice === 'paper' && player_choice === 'rock'
    ) {
        compScoreValue++
        compScorOutput.innerHTML = compScoreValue
        textForPlayer.innerHTML = `${textName(player_choice)}${forUser} lose to ${textName(computer_choice)}${forUser} <br>You Los!`
        // for color
        forColorElement.classList.add('red-layer');
        setTimeout(() => {
            forColorElement.classList.remove('red-layer')
        }, 300)
    }
}

//for result window
const winOrLosDisplay = () => {
    if (roundCounter === roundChecked) {
        if (compScoreValue === playerScorValue) {
            resultDisplayNone.style.display = 'none'
            resultDisplayBlock.style.display = 'block'
            resultDisplayBlock.innerHTML = 'Drow!'
            resultDisplayBlock.style.backgroundColor = 'grey'
        }
        else if (playerScorValue < compScoreValue) {
            resultDisplayNone.style.display = 'none'
            resultDisplayBlock.style.display = 'block'
            resultDisplayBlock.style.backgroundColor = 'darkred'
            resultDisplayBlock.innerHTML = 'Computer WIN! '

        }
        else if (playerScorValue > compScoreValue) {
            resultDisplayNone.style.display = 'none'
            resultDisplayBlock.style.display = 'block'
            resultDisplayBlock.innerHTML = 'Player WIN! '
            resultDisplayBlock.style.backgroundColor = 'darkgreen'
        }
    }
}

// for random
const randomChoice = () => {
    const items = ['rock', 'paper', 'scissors']
    const randomItem = Math.floor(Math.random() * items.length)
    computer_choice = items[randomItem]
}

//for radios value
const radioSelect = () => {
    roundChecked = document.querySelector('input:checked').value * 1
}










