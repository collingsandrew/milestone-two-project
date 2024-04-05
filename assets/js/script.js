/*jshint esversion: 6 */ 

let flippedCard1, flippedCard2;
let correctMatches = document.querySelector('#correct-matches');
let matches = 0;

// add event listener for when the HTML is fully loaded, ensuring javascript does not run until then
document.addEventListener('DOMContentLoaded', function() {
});

// function to shuffle the cards on the game board
// the fisher-yates sorting algorithm has been used to shuffle the array of cards https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
// array destructuring used to shuffle the array for each node
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

// forEach loop with an event listener that adds the class 'flip-card' to each game card that is clicked, resulting in the card rotating 180 degrees
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('flip-card')) {
            return;
        }

        card.classList.add('flip-card');

        if (!flippedCard1) {
            flippedCard1 = card;
        } else {
            flippedCard2 = card;
            if (card.innerHTML === flippedCard1.innerHTML) {
                matches ++;
                correctMatches.innerHTML = matches;
                flippedCard1 = null;
                flippedCard2 = null;
            }  else {
                setTimeout(() => {
                    card.classList.remove('flip-card');
                    flippedCard1.classList.remove('flip-card');
                    flippedCard1 = null;
                }, 1200);
            }
        }
    });
});

// function to start a new game, resetting the cards, timer, correct matches, and shuffling the board. used for the 'new game' button and on page load
function newGame(evt) {
    const gameBoard = document.querySelector('.game-board');
    const gameCards = [...gameBoard.children];

    shuffleBoard(gameBoard);

    gameCards.forEach(card => {
        card.classList.remove('flip-card');
    });
}

// shuffles the cards on the board when the page has loaded
window.onload = newGame();