// Ask to input maximum number
let maximum = parseInt(prompt("Enter the maximum number!"));

// Check if the input number is valid
while (!maximum) {
	let maximum = parseInt(prompt("Enter a valid number!"));
}

// Randomize the target number by using a formula
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

// Declare attempt count and guess number after converting it from string to integer
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

// Game logic
while (parseInt(guess) !== targetNum) {
	if (guess === "q") break;
	attempts++;
	if (guess > targetNum) {
		guess = prompt("Too high! Enter a new guess:");
	} else {
		guess = prompt("Too low! Enter a new guess:");
	}
}

// Display goodbye text if won or lost
if (guess === "q") {
	console.log("OK, YOU QUIT!");
} else {
	console.log(`CONGRATULATIONS, you got it! It took you ${attempts} guesses`);
}
