import sales from "./db/salesdb";

//function to get all orders

const getSales=(req, res)=>{
	res.send( sales);
};

//function for fetch a specific order
const getSinglesale=(req, res)=>{
	const sale = sales.find(c => c.id === parseInt(req.params.id));
	if(!sale) res.status(404).send("the sales record with the given ID was not found");
	res.send(sale);
};

// function for placing a new order/post
const postSales=(req, res)=>{
	const newSales={
		id:sales.length +1,
		customerName:req.body.customerName,
		productName:req.body.productName,
		productId:req.body.productId,
		quantity:req.body.quantity,
		totolPrice:req.body.totolPrice
	};
	sales.push(newSales);
	res.send(newSales);
};



export default { getSales, getSinglesale,postSales};
