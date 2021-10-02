const loginControllers=require("./controllers/login.controler")
app.use('/login',loginControllers)

const userControllers=require('./controllers/userss.controller');
app.use("/signup",userControllers)