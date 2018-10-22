"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _products = require("../controllers/products");

var _products2 = _interopRequireDefault(_products);

var _sales = require("../controllers/sales");

var _sales2 = _interopRequireDefault(_sales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/* GET home page. */
// get all orders
router.get("/products", _products2.default.getProducts);

// fetch all the orders
router.get("/products/:id", _products2.default.getSingleproduct);

// place a new orders /post
router.post("/products", _products2.default.postProducts);

//update orders
router.put("/products/:id", _products2.default.updateProducts);

// get all sales
router.get("/sales", _sales2.default.getSales);

//fetch single sale
router.get("/sales/:id", _sales2.default.getSinglesale);

//add new sales records

router.post("/sales", _sales2.default.postSales);

exports.default = router;