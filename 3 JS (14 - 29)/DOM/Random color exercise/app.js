// Variable declaration
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
let rgbSum = 0;

// Function to generate random numbers and return an RGB value
const randomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	rgbSum = r + g + b;
	return (newColor = `rgb(${r}, ${g}, ${b})`);
};

// Listen for a click event and execute
button.addEventListener('click', () => {
	const newColor = randomColor();

	// Check if backgroud color is not too dark
	if (rgbSum < 300) {
		h1.style.color = 'white';
	} else {
		h1.style.color = 'black';
	}

	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
});

button;
