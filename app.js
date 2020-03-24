const Port=3000;
const express=require('express');
const mongoose=require('mongoose');
const configMiddleware=require('./config-midlewares/config');
var app=express();

mongoose.connect('mongodb://localhost/Quize2',()=>{
    console.log('db connected')
})



app=configMiddleware(app);




app.listen(Port,()=>{
    console.log("server is up")
})


