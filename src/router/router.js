import express from "express";
const router = express.Router();
import Orders from "../controllers/products";
import sales from "../controllers/sales";

/* GET home page. */
// get all orders
router.get("/products",Orders.getProducts);

// fetch all the orders
router.get("/products/:id", Orders.getSingleproduct);

// place a new orders /post
router.post("/products", Orders.postProducts);

//update orders
router.put("/products/:id", Orders.updateProducts);

// get all sales
router.get("/sales",sales.getSales);

//fetch single sale
router.get("/sales/:id",sales.getSinglesale);

//add new sales records

router.post("/sales",sales.postSales);

export default router;
