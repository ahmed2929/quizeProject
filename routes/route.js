const express=require('express');
const Router=express.Router();
const controller=require('../controllers/main-controller')

var verfiyToken=(req,res,next)=>{
    const bearerheader=req.headers.authorization
    

    if(bearerheader){
        const bearer=bearerheader.split(' ');
        const bearerToken=bearer[1];
        
        req.token=bearerToken;
        next();

    }else{
        res.sendStatus(403)
    }



   
}
  

Router.post('/register',controller.register);
Router.post('/login',controller.login);
Router.get('/',verfiyToken,controller.home) //to get quiezs from frinds shoud only work when login 
Router.post('/create',verfiyToken,controller.create)
Router.get('/results',controller.quizeResult);














module.exports=Router
