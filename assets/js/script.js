/*jshint esversion: 6 */ 

// variable to access the cards on the game board
const gameMemoryCards = document.querySelectorAll('.game-card');
// variables for the first and second flipped card
let flippedCard1, flippedCard2;
// variable accessing the correct matches counter on the board
const correctMatches = document.querySelector('#correct-matches');
// variable to count the current matches the user has
let matches = 0;
// variable accessing the countdown timer on the game board
const gameTimer = document.querySelector('#game-timer');
// variable setting the initial time limit for the counter in seconds
let timeLimit = 60;

// event listener for when the HTML is fully loaded, ensuring javascript does not run until then, shuffles the cards on the game board once loaded
document.addEventListener('DOMContentLoaded', newGame);

// function to shuffle the cards on the game board
// the fisher-yates sorting algorithm has been used to shuffle the array of cards https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
// array destructuring used to shuffle each index with the shuffled index
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// function that removes the current cards on the board and replaces them with the shuffled cards array, giving them a new position on the board
function shuffleBoard(cardsContainer) {
    const gameCards = [...cardsContainer.children];
    const shuffledGameCards = shuffleCards(gameCards);

    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
    shuffledGameCards.forEach(function(card) {
        cardsContainer.appendChild(card);
    });
}

// forEach loop with an event listener that flips the card and checks whether the two cards match
gameMemoryCards.forEach(card => {
    card.addEventListener('click', () => {
        // if the card is already flipped, exit the function
        if (card.classList.contains('flip-card')) {
            return;
        }
        // add the flip-card class that rotates the card 180 degrees
        card.classList.add('flip-card');

        // if flippedCard1 does not have the value of card then give it the value, this will be the first card flipped
        if (!flippedCard1) {
            flippedCard1 = card;
        } else {
            // if flippedCard1 does have the value of card, give flippedCard2 the value
            flippedCard2 = card;
            // remove the means of flipping any other cards, allowing two at a time
            lockCards();
            // check if the two flipped cards match
            checkCardMatch(card);
        }
    });
});

// function to check if the two flipped cards match or not
// checks if the 'correct matches' counter is equal to 8, and presents the congratulations modal if it is
function checkCardMatch(card) {
    // check if the two flipped cards have the same inner HTML (img tags and src)
    if (card.innerHTML === flippedCard1.innerHTML) {
        // if the two cards match, increase the correct matches counter by 1 and reset the flipped cards values
        matches ++;
        correctMatches.innerHTML = matches;
        // reenable click events on all cards
        unlockCards();

        // if the correct matches counter equals 8, display congrats modal
        if (matches === 8) {
            setTimeout(() => {
                modalDisplay(document.querySelector('#congrats-modal'));
            }, 1000);
        }
        flippedCard1 = null;
        flippedCard2 = null;
    }  else {
        // if the two cards do not match, flip the cards back over after a short period of time
        setTimeout(() => {
            card.classList.remove('flip-card');
            flippedCard1.classList.remove('flip-card');
            // reeanble click event on all cards
            unlockCards();
            flippedCard1 = null;
        }, 1200);
    }
}

// function to display the given modal in the parameter
function modalDisplay(modal) {
    modal.style.display = 'block';
}

// function to stop the user clicking and flipping more cards when two have already been flipped
function lockCards() {
    if ((flippedCard1 !== null) && (flippedCard2 !== null)) {
        gameMemoryCards.forEach(card => {
            if (!card.classList.contains('flip-card')) {
                card.style.pointerEvents = 'none';
            }
        });
    }
}

// function to allow the user to click and flip cards again
function unlockCards() {
    gameMemoryCards.forEach(card => {
        if (!card.classList.contains('flip-card')) {
            card.style.pointerEvents = 'auto';
        }
    });
}

// function to make the game timer countdown from 1 minute
// https://www.youtube.com/watch?v=x7WJEmxNlEs&list=PLF5aobzHSchkhjYGigJ6ldBQJ39VSi69o&index=5&t=53s used as a guide
function updateTimer() {
    let minutes = Math.floor(timeLimit / 60);
    let seconds = timeLimit % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // update the html of the game board timer with the minutes and seconds variable values
    gameTimer.innerHTML = `${minutes}:${seconds}`;
    // reduce the timeLimit variable by 1
    timeLimit--;

    // display game over modal when the game timer reaches zero
    if (timeLimit === 0) {
        clearInterval(gameTimerInterval);
        modalDisplay(document.querySelector('#game-over-modal'));
    }
}

// reduces the timer by 1 second per interval
let gameTimerInterval = setInterval(updateTimer, 1000);

// function to start a new game, resetting the cards, timer, correct matches, and shuffling the board. used for the 'new game' button and on page load
function newGame(evt) {
    const gameBoard = document.querySelector('.game-board');
    const gameCards = [...gameBoard.children];
    const modals = document.querySelectorAll('.game-modals');

    // reset the game timer and the correct matches counter on game board
    timeLimit = 60;
    updateTimer();
    matches = 0;
    correctMatches.innerHTML = matches;

    // hide any modals that are currently displayed
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    // shuffle the cards on the game board
    shuffleBoard(gameBoard);

    // flip all cards back over
    gameCards.forEach(card => {
        card.classList.remove('flip-card');
    });
}