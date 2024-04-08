/*jshint esversion: 6 */ 

// variables for the first and second flipped card
let flippedCard1, flippedCard2;
// variable accessing the correct matches counter on the board
let correctMatches = document.querySelector('#correct-matches');
// variable to count the current matches the user has
let matches = 0;
// variable to access the cards on the game board
const gameMemoryCards = document.querySelectorAll('.game-card');

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

// function to start a new game, resetting the cards, timer, correct matches, and shuffling the board. used for the 'new game' button and on page load
function newGame(evt) {
    const gameBoard = document.querySelector('.game-board');
    const gameCards = [...gameBoard.children];

    matches = 0;
    correctMatches.innerHTML = matches;
    document.querySelector('#congrats-modal').style.display = 'none';
    shuffleBoard(gameBoard);

    gameCards.forEach(card => {
        card.classList.remove('flip-card');
    });
}