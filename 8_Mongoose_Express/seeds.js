/* seeds.js is used to set up initial data in the database for a more convenient work (to seed the database).
This file is isolated from the application and only ran when needed */
const mongoose = require('mongoose');
const Product = require('./models/product');

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect('mongodb://localhost:27017/farmStand');
	console.log('MONGO CONNECTION OPEN!');
}

// const p = new Product({
// 	name: 'Ruby Grapefruit',
// 	price: 1.99,
// 	category: 'fruit',
// });
// p.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const seedProducts = [
	{
		name: 'Fairy Eggplant',
		price: 1.0,
		category: 'vegetable',
	},
	{
		name: 'Organic Goddess Melon',
		price: 4.99,
		category: 'fruit',
	},
	{
		name: 'Organic Mini Seedless Watermelon',
		price: 3.99,
		category: 'fruit',
	},
	{
		name: 'Organic Celery',
		price: 1.5,
		category: 'vegetable',
	},
	{
		name: 'Chocolate Whole Milk',
		price: 2.69,
		category: 'dairy',
	},
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});
