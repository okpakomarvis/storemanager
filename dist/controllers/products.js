"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _productdb = require("./db/productdb");

var _productdb2 = _interopRequireDefault(_productdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//function to get all orders

var getProducts = function getProducts(req, res) {
	res.send(_productdb2.default);
};

//function for fetch a specific order
var getSingleproduct = function getSingleproduct(req, res) {
	var food = _productdb2.default.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	res.send(food);
};

// function for placing a new order/post
var postProducts = function postProducts(req, res) {
	var newFood = {
		id: _productdb2.default.length + 1,
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	};
	_productdb2.default.push(newFood);
	res.send(newFood);
};

// update the status of and Orders
var updateProducts = function updateProducts(req, res) {
	var food = _productdb2.default.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!food) res.status(404).send("the food with the given ID was not found");
	food.name = req.body.name;
	food.description = req.body.description;
	food.price = req.body.price;
	res.send(food);
};

exports.default = { getProducts: getProducts, getSingleproduct: getSingleproduct, postProducts: postProducts, updateProducts: updateProducts };