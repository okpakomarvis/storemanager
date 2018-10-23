import foods from "./db/productdb";

//function to get all orders

const getProducts=(req, res)=>{
	res.send( foods);
};

//function for fetch a specific order
const getSingleproduct=(req, res)=>{
	const food = foods.find(c => c.id === parseInt(req.params.id));
	if(!food) res.status(404).send("the food with the given ID was not found");
	res.send(food);
};

// function for placing a new order/post
const postProducts=(req, res)=>{
	const newFood={
		id:foods.length +1,
		name:req.body.name,
		description:req.body.description,
		price:req.body.price
	};
	foods.push(newFood);
	res.send(newFood);
};

// update the status of and Orders
const updateProducts=(req, res)=>{
	const food = foods.find(c => c.id === parseInt(req.params.id));
	if(!food) res.status(404).send("the food with the given ID was not found");
	food.name=req.body.name;
	food.description=req.body.description;
	food.price=req.body.price;
	res.send(food);
};

export default { getProducts, getSingleproduct,postProducts,updateProducts};
