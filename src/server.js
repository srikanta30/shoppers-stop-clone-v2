//Express:
const express = require('express');
const app = express();
app.use(express.json())

//Connecting To Database:
const connect = require('./configs/db');

//Controllers:


//View Engine EJS:
app.use(express.static('public'))
app.set("view engine", "ejs");

//APIs:


//For Server:
app.listen(3000, async () => {
try {
 await connect();
 console.log("Listening On Port 3000...");
 }
catch (err) {
 console.log(`Error! Database Not Connected.`);
}
})
