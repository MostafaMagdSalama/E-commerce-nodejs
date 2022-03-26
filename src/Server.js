const express =require('express')
const cors = require('cors')
var morgan = require('morgan')
const{handleError}=require('./Middlewares/ErrorHandling.middleware')
const app=express()


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
require('express-async-errors');

app.use(morgan('tiny'))

//connect database
require('./Config/ConnectDB');
//parssing data
app.use(express.json());

//users routes
app.use('/users',require('./Routes/User.router'))
//products routes
app.use('/products',require('./Routes/Product.router'))
//ad,oms routes
app.use('/admins',require('./Routes/Admin.router'))
app.use('/orders',require('./Routes/Order.router'))


//error handling 
app.use(handleError)



const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`the application is running on port ${PORT}`)
})