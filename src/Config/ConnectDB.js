const mongoose =require('mongoose')
mongoose.connect("mongodb+srv://mostafa:mostafa@cluster0.qgbbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
    console.log('DB connected')
})