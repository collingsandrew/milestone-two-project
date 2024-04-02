const gameBoard = document.querySelector('.game-board');

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

// function to use the shuffledCards function and place the shuffled array to its new position on the board
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

// function to start a new game and reset/shuffle the board
function newGame(evt) {
    shuffleBoard(gameBoard);
}