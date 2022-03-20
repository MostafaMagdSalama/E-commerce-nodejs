const express =require('express')
const cors = require('cors')
var morgan = require('morgan')
const{handleError}=require('./Middlewares/ErrorHandling.middleware')
const app=express()

app.use(cors())
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



const PORT=3000|process.env.PORT;
app.listen(PORT,()=>{
    console.log(`the application is running on port ${PORT}`)
})