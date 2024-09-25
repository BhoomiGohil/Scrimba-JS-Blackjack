// =====================
// JavaScript Code Examples
// =====================

console.log("If with one condition :");

// Declare a variable age and assign it a value of 22
let age = 22;

// Check if age is less than 21
if (age < 21) {
  console.log("You can not enter the club!"); // Output if condition is true
} else {
  console.log("Welcome"); // Output if condition is false
}

console.log("\n");

//////////////////////////////////////////////////////////

console.log("If with two conditions :");

// Update the age variable to 100
age = 100;

// Check if age is less than 100
if (age < 100) {
  console.log("Not eligible"); // Output if age is less than 100
} else if (age === 100) {
  console.log("Here is your birthday card from the king!"); // Output if age is exactly 100
} else {
  console.log("Not eligible, you have already gotten one"); // Output if age is greater than 100
}

console.log("\n");

///////////////////////////////////////////////////////////

console.log("Checking ==, ===, < , > , <= , >=");

// Demonstrating equality and comparison operators
console.log(4 === 3); // false, 4 is not equal to 3
console.log(5 > 2); // true, 5 is greater than 2
console.log(12 > 12); // false, 12 is not greater than 12
console.log(3 < 0); // false, 3 is not less than 0
console.log(3 >= 3); // true, 3 is greater than or equal to 3
console.log(11 <= 11); // true, 11 is less than or equal to 11
console.log(3 <= 2); // false, 3 is not less than or equal to 2

console.log("\n");

//////////////////////////////////////////////////////////

// ========================
// Array Manipulation
// ========================

// Array of featured posts
let featuredPosts = [
  "Check out my netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];

// Array of experience
let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

// Logging each featured post to the console
console.log(featuredPosts[0]);
console.log(featuredPosts[1]);
console.log(featuredPosts[2]);

// Logging each experience to the console
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);

// Log the length of experience and featuredPosts arrays
console.log(experience.length);
console.log(featuredPosts.length);

// Array containing different types of information
let information = ["Bhoomi", 28, true];

// Initializing an array of card values and pushing a new value
let cards1 = [7, 4];
cards1.push(6); // Adding 6 to cards1 array

// Array of messages
let message1 = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

// Logging the message1 array to the console
console.log(message1);
message1.push("Same here!"); // Adding a new message to the array
console.log(message1);

// Removing the last message from the array
message1.pop();
console.log(message1);

console.log("\n");

///////////////////////////////////////////////////////////

console.log("Looping Examples");

// Logging numbers from 1 to 10
for (let count = 1; count < 11; count++) {
  console.log(count);
}

// Logging numbers from 0 to 5
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// Logging multiples of 10 from 10 to 100
for (let count = 10; count <= 100; count += 10) {
  console.log(count);
}

// Logging each message in the message1 array
for (i = 0; i < message1.length; i++) {
  console.log(message1[i]);
}

// Array of sentence words and getting the greeting element from the DOM
let sentence = ["Hello", "my", "name", "is", "Bhoomi"];
let greetingEl = document.getElementById("greeting-el");

// Appending each word from the sentence array to the greeting element's text content
for (i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

console.log("\n");

//////////////////////////////////////////////////////////

console.log("Race Time Comparison");

// Variables for race times of two players
let player1Time = 102;
let player2Time = 107;

// Function to determine the fastest race time
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time; // Return player1's time if it's faster
  } else if (player2Time < player1Time) {
    return player2Time; // Return player2's time if it's faster
  } else {
    return player1Time; // Return either if they are the same
  }
}

// Getting the fastest race time
let fastestRace = getFastestRaceTime();

// Function to get the total race time
function getTotalRaceTime() {
  return player1Time + player2Time; // Return the sum of both players' times
}

// Getting the total race time
let totalTime = getTotalRaceTime();

// Logging the total race time to the console
console.log(totalTime);

console.log("\n");

/////////////////////////////////////////////////////////

console.log("Dice Roll Function");

// Function to roll a dice and return a random number between 1 and 6
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber; // Return the random number
}

// Logging the result of rolling the dice
console.log(rollDice());

console.log("\n");

//////////////////////////////////////////////////////////

console.log("Course Completion Logic");

// Variables for course completion and certificate status
let hasCompletedCourse = true;
let givesCertificate = true;

// Check if the course is completed and a certificate is given
if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate(); // Generate certificate if both conditions are met
}

// Function to generate a certificate
function generateCertificate() {
  console.log("Generating certificate...."); // Log certificate generation
}

// Variables for challenge status and hints
let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Check if the challenge is not solved and no hints are left
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution(); // Show solution if both conditions are met
}

// Function to show the solution
function showSolution() {
  console.log("Showing the solution...."); // Log solution display
}

// Updating course completion and certificate status
hasCompletedCourse = true;
givesCertificate = true;

// Check if either the course is completed or a certificate is given
if (hasCompletedCourse === true || givesCertificate === true) {
  generateCertificate(); // Generate certificate if at least one condition is met
}

// Variables for movie preferences
let likesDocumentaries = true;
let likesStartups = false;

// Check if the user likes either documentaries or startups
if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie(); // Recommend a movie if at least one preference is true
}

// Function to recommend a movie
function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!"); // Log movie recommendation
}

console.log("\n");

//////////////////////////////////////////////////////////

console.log("Course Object");

// Object representing a course
let course = {
  title: "Learn CSS Grid for free", // Course title
  lessons: 16, // Number of lessons
  creator: "Bhoomi Gohil", // Creator of the course
  length: 63, // Length of the course in minutes
  level: 2, // Level of the course
  isFree: true, // Free status of the course
  tags: ["html", "css"], // Tags associated with the course
};

// Logging the tags of the course object
console.log(course.tags);
console.log(course["tags"]); // Another way to access the tags using bracket notation

console.log("\n");

//////////////////////////////////////////////////////////
