

let cards = []
let sum = 0
let hasBlackHack = false
let isAlive = false
let message = ' '

let playerEl = document.getElementById('player-el')

let player = {
    name: 'Daberechi',
    chips: 1000
}

playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

// Function that returns a random number between 1 and 13
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = 'Cards: '
    for(i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + '  '
    }
    sumEl.textContent = 'Sum: '+ sum
    if (sum <= 20){
    message = 'Do you want to draw another card? '
    hasBlackHack = false
    }else if (sum === 21){
    message = `Hurray!, you've got BlackJack! `
    hasBlackHack = true
    }else{
    message = 'Sorry, you are out of the game! '
    isAlive = false
    }

    messageEl.textContent = message
}



function newCard(){
    if(isAlive === true && hasBlackHack === false ){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}








