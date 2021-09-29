//Database Configuration:

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(`mongodb+srv://shoppersstop:ShoppersStop2021@cluster0.di9yg.mongodb.net/ShoppersStopDB?retryWrites=true&w=majority`)
}       

module.exports = connect