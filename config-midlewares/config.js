const express=require('express');
const bodyParser=require('body-parser');

const Routes=require('../routes/route')

module.exports=(app)=>{
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json());
app.use(Routes);










    return app;
}