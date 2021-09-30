//Express:
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

//Connecting To Database:
const connect = require('./configs/db');


//View Engine EJS & Setting Views & Static Files:
app.set("view engine", "ejs");
app.set("views", './src/views');
app.use("/public", express.static('./src/public'));


//Controllers:
const cartController = require('./controllers/cart.controller');
app.use("/cart", cartController);

const userController = require('./controllers/user.controller');
app.use("/user", userController);

const productController = require('./controllers/product.controller');
app.use("/product", productController);

const homeController = require('./controllers/home.controller');
app.use("/", homeController);


//For Server:
app.listen(3000, async () => {
try {
 await connect();
 console.log("Listening On Port 3000...");
 }
catch (err) {
 console.log(`Error! Database Not Connected.`);
}
});
