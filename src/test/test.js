"use strict";

process.env.NODE_ENV = "test";
//Require the dev-dependencies
import chai from "chai";
import  chaiHttp  from "chai-http";
import server from "../app";
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe("/GET products", () => {
	it("it should GET all the the orders", (done) => {
		chai.request(server)
			.get("/api/v1/products")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("array");
				done();
			});
	});
});
// test for get sale
describe("/GET sales", () => {
	it("it should GET all the the orders", (done) => {
		chai.request(server)
			.get("/api/v1/sales")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("array");
				done();
			});
	});
});

// test post request
describe("/POST products", () => {
	it("it should  POST a food", (done) => {
		let food = {
			id: 4,
			name:"beans",
			description: "beans is a good protein source",
			price:"$100"
		};
		chai.request(server)
			.post("/api/v1/products")
			.send(food)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				done();
			});
	});

});
 
 //test for sales post request
 describe("/POST sales", () => {
	it("it should Create a new Sales records", (done) => {
		let sale = {
			id:3,
			customerName:"Peter Anderson ",
			productName:"sweet pannaple",
			productId:"2",
			quantity:"3",
			totalPrice:"$900"
		};
		chai.request(server)
			.post("/api/v1/sales")
			.send(sale)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				done();
			});
	});

});


//test the get /fectch a specific order
describe("/GET/:id products", () => {
	it("it should GET a food by the given id", (done) => {
		let food = {
			id: 4,
			name:"beans",
			description: "beans is a good protein source",
			price:"$100"

		};
		chai.request(server)
			.get("/api/v1/products/" + food.id)
			.send(food)
			.end((err, res) => {
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
describe("/GET/:id sales", () => {
	it("it should GET a sales record by the given id", (done) => {
		const sale = {
			id:3,
			customerName:"Peter Anderson ",
			productName:"sweet pannaple",
			productId:"2",
			quantity:"3",
			totalPrice:"$900"
		};
		chai.request(server)
			.get("/api/v1/sales/" + sale.id)
			.send(sale)
			.end((err, res) => {
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

describe("/PUT/:id products", () => {
		it("it should UPDATE a food given the id", (done) => {
		let food = {
			id: 4,
			name:"rice",
			description: "rice is a good carbonhydrate source",
			price:"$200"
		};
		chai.request(server)
			.put("/api/v1/products/" + food.id)
			.send({id: 4,
				name:"beans",
				description: "beans is a good protein source",
				price:"$300"
			})
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("name").eql("beans");
				res.body.should.have.property("description").eql("beans is a good protein source");
				res.body.should.have.property("price").eql("$300");
				done();
			});
	});
});
