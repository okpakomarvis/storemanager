"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

//creating an array of foods
var foods = [{
	id: 1,
	name: "sweet panneaple",
	description: "very juicy and enriching",
	price: "$300"
}, {
	id: 2,
	name: "sweet bannana",
	description: "Good for your health",
	price: "$800"
}, {
	id: 3,
	name: "sweet Orange",
	description: "very medicinal",
	price: "$2000"
}];
//function to get all orders

var getProducts = function getProducts(req, res) {
	res.send(foods);
};

//function for fetch a specific order
var getSingleproduct = function getSingleproduct(req, res) {
	var food = foods.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	res.send(food);
};

// function for placing a new order/post
var postProducts = function postProducts(req, res) {
	var newFood = {
		id: foods.length + 1,
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	};
	foods.push(newFood);
	res.send(newFood);
};

// update the status of and Orders
var updateProducts = function updateProducts(req, res) {
	var food = foods.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	food.name = req.body.name;
	food.description = req.body.description;
	food.price = req.body.price;
	res.send(food);
};

exports.default = { getProducts: getProducts, getSingleproduct: getSingleproduct, postProducts: postProducts, updateProducts: updateProducts };