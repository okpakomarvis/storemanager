"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require("../app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = "test";
//Require the dev-dependencies

var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);
//Our parent block
describe("/GET products", function () {
	it("it should GET all the the orders", function (done) {
		_chai2.default.request(_app2.default).get("/api/v1/products").end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("array");
			done();
		});
	});
});
// test for get sale
describe("/GET sales", function () {
	it("it should GET all the the orders", function (done) {
		_chai2.default.request(_app2.default).get("/api/v1/sales").end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("array");
			done();
		});
	});
});

// test post request
describe("/POST products", function () {
	it("it should  POST a food", function (done) {
		var food = {
			id: 4,
			name: "beans",
			description: "beans is a good protein source",
			price: "$100"
		};
		_chai2.default.request(_app2.default).post("/api/v1/products").send(food).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			done();
		});
	});
});

//test for sales post request
describe("/POST sales", function () {
	it("it should Create a new Sales records", function (done) {
		var sale = {
			id: 3,
			customerName: "Peter Anderson ",
			productName: "sweet pannaple",
			productId: "2",
			quantity: "3",
			totalPrice: "$900"
		};
		_chai2.default.request(_app2.default).post("/api/v1/sales").send(sale).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			done();
		});
	});
});

//test the get /fectch a specific order
describe("/GET/:id products", function () {
	it("it should GET a food by the given id", function (done) {
		var food = {
			id: 4,
			name: "beans",
			description: "beans is a good protein source",
			price: "$100"

		};
		_chai2.default.request(_app2.default).get("/api/v1/products/" + food.id).send(food).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			res.body.should.have.property("name");
			res.body.should.have.property("description");
			res.body.should.have.property("price");
			res.body.should.have.property("id").eql(food.id);
			done();
		});
	});
});

//test for get single sale records 
describe("/GET/:id sales", function () {
	it("it should GET a sales record by the given id", function (done) {
		var sale = {
			id: 3,
			customerName: "Peter Anderson ",
			productName: "sweet pannaple",
			productId: "2",
			quantity: "3",
			totalPrice: "$900"
		};
		_chai2.default.request(_app2.default).get("/api/v1/sales/" + sale.id).send(sale).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			res.body.should.have.property("customerName");
			res.body.should.have.property("productName");
			res.body.should.have.property("productId");
			res.body.should.have.property("quantity");
			res.body.should.have.property("id").eql(sale.id);
			done();
		});
	});
});

// put //update the status of a product
// Test the /PUT/:id route

describe("/PUT/:id products", function () {
	it("it should UPDATE a food given the id", function (done) {
		var food = {
			id: 4,
			name: "rice",
			description: "rice is a good carbonhydrate source",
			price: "$200"
		};
		_chai2.default.request(_app2.default).put("/api/v1/products/" + food.id).send({ id: 4,
			name: "beans",
			description: "beans is a good protein source",
			price: "$300"
		}).end(function (err, res) {
			res.should.have.status(200);
			res.body.should.be.a("object");
			res.body.should.have.property("name").eql("beans");
			res.body.should.have.property("description").eql("beans is a good protein source");
			res.body.should.have.property("price").eql("$300");
			done();
		});
	});
});