//Express:
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Connecting To Database:
const connect = require('./configs/db');


//View Engine EJS & Setting Views & Static Files:
app.set("view engine", "ejs");
app.set("views", './src/views');
app.use("/public", express.static('./src/public'));


//Controllers:

const cartController = require('./controllers/cart.controller');
app.use("/cart", cartController);

const categoryController = require('./controllers/category.controller');
app.use("/category", categoryController);

const checkoutController = require('./controllers/checkout.controller');
app.use("/checkout", checkoutController);

const homeController = require('./controllers/home.controller');
app.use("/", homeController);

const paymentController = require('./controllers/payment.controller');
app.use("/payment", paymentController);

const productController = require('./controllers/product.controller');
app.use("/product", productController);

const successfulController = require('./controllers/successful.controller');
app.use("/successful", successfulController);

const userController = require('./controllers/user.controller');
app.use("/user", userController);

const wishlistController = require('./controllers/wishlist.controller');
app.use("/wishlist", wishlistController);


//For Server:
let port = process.env.PORT || 5000;
app.listen(port, async () => {
try {
 await connect();
 console.log(`Listening On Port http://localhost:${port}...`);
 }
catch (err) {
 console.log(`Error! Database Not Connected.`);
}
});
