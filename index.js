let cards = [], // Array to store player's cards
  sum = 0, // Sum of player's cards
  hasBlackJack = false, // Flag to track if player has Blackjack
  isAlive = false, // Flag to check if player is still in the game
  message = ""; // Message displayed to player

// References to HTML elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

// let player = {
//   name: "Bhoomi",
//   chips: 145,
// };

// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;

// Function to generate a random card between 1 and 11
function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;

  // Return 11 for Ace, 10 for face cards, or the actual value for numbered cards
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

// Function to start the game
function startGame() {
  isAlive = true; // Player is active in the game
  let firstCard = getRandomCard(),
    secondCard = getRandomCard();

  // Store the two initial cards
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1]; // Calculate the sum of the cards
  renderGame(); // Display the game status
}

// Function to render the game status
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // Update the sum and cards display
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";

  // Display all the cards drawn
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  // Display the game message
  messageEl.textContent = message;
}

// Function to draw a new card if conditions are met
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card; // Add the new card to the sum
    cards.push(card); // Add the card to the array
    renderGame(); // Update the game status
  }
}
