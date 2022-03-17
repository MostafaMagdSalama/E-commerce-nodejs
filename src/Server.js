const express =require('express')
var morgan = require('morgan')
const{handleError}=require('./Middlewares/ErrorHandling.middleware')
const app=express()


app.use(morgan('tiny'))



//connect database
require('./Config/ConnectDB');
//parssing data
app.use(express.json());

//users routes
app.use('/users',require('./Routes/User.router'))
//products routes
app.use('/products',require('./Routes/Product.router'))


//error handling 
app.use(handleError)



const PORT=3000|process.env.PORT;
app.listen(PORT,()=>{
    console.log(`the application is running on port ${PORT}`)
})