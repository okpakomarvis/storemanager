
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
//import expressHbs from "express-handlebars";
import methodOverride from "method-override";
import indexRouter from "./router/router";
//import loginRouter from "./controllers/login";
import cookieParser from "cookie-parser";

var app = express();
//set port
const port=process.env.PORT || 3000;

// set body-parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());
app.use(methodOverride("_method"));

//get home page
app.use("/api/v1", indexRouter);

//setting http
app.listen(port, (req, res) =>{
	console.log(`listening... on ${port}`);
});

module.exports = app;
