"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _salesdb = require("./db/salesdb");

var _salesdb2 = _interopRequireDefault(_salesdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//function to get all orders

var getSales = function getSales(req, res) {
	res.send(_salesdb2.default);
};

//function for fetch a specific order
var getSinglesale = function getSinglesale(req, res) {
	var sale = _salesdb2.default.find(function (c) {
		return c.id === parseInt(req.params.id);
	});
	if (!sale) res.status(404).send("the sales record with the given ID was not found");
	res.send(sale);
};

// function for placing a new order/post
var postSales = function postSales(req, res) {
	var newSales = {
		id: _salesdb2.default.length + 1,
		customerName: req.body.customerName,
		productName: req.body.productName,
		productId: req.body.productId,
		quantity: req.body.quantity,
		totolPrice: req.body.totolPrice
	};
	_salesdb2.default.push(newSales);
	res.send(newSales);
};

exports.default = { getSales: getSales, getSinglesale: getSinglesale, postSales: postSales };