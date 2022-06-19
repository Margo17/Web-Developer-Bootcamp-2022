// Selecting required HTML elements, adding player data to an object for more convenient use
const p1 = {
	score: 0,
	button: document.querySelector('#p1Button'),
	display: document.querySelector('#p1Display'),
};
const p2 = {
	score: 0,
	button: document.querySelector('#p2Button'),
	display: document.querySelector('#p2Display'),
};
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// Initializing variables
let winningScore = 3;
let gameOver = false;

// Main function for updating scores
function updateScores(player, opponent) {
	if (!gameOver) {
		player.score += 1;

		// If score reaches the limit stop the counter and add colors
		if (player.score === winningScore) {
			gameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

// On click - change player 1 score
p1.button.addEventListener('click', function () {
	updateScores(p1, p2);
});

// On click - change player 2 score
p2.button.addEventListener('click', function () {
	updateScores(p2, p1);
});

// Add functionality to change the score limit
winningScoreSelect.addEventListener('change', function () {
	winningScore = parseInt(this.value);
	reset();
});

// On click - reset scores
resetButton.addEventListener('click', reset);

// Reset function
function reset() {
	gameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
}
