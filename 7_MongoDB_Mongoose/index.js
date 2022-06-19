const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect('mongodb://localhost:27017/movieApp');
	console.log('CONNECTION OPEN!');
}

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String,
});

// Model name is really important – has to be singular and start with a capital letter
const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({
	title: 'Amadeus',
	year: 1986,
	score: 9.2,
	rating: 'R',
});

// Movie.insertMany([
// 	{ title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
// 	{ title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
// 	{ title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
// 	{ title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
// 	{ title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
// ]);
