const mongoose=require('mongoose');
const user=require('../modles/user');
const quize=require('../modles/quize')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');





var register=(req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);


 var newUser=new user({
     name:req.body.name,
     password:hash,
    email:req.body.email,
 })

newUser.save()
// connect to db 



res.status(200);
res.json({message:"sucessRegister"})


}

var login=async(req,res)=>{

//login logic
const userR=await user.findOne({email:req.body.email});
if(userR){
    const result=bcrypt.compareSync(req.body.password,userR.password ); 
    if(result){
      var token=jwt.sign({userR},'AK',{expiresIn:'1h'})
      res.json({login:true,token})

    }else{
        res.json({message:"wrong pass"})
    }


}else{
    res.json({message:"no user"})
}




res.status(200);
res.json({message:"sucesslogin"})



}

var home=async (req,res)=>{
    console.log('home fired')
    const token=req.token;

     jwt.verify(token, 'AK', function(err, user) {
         if(err) throw err
       res.json(user)
       });
    




    //login logic
    
    // var result=await quize.find();
    // var usr=await user.findById(result[0].user); 
    
   
    



    // res.status(200);
    // res.json({questions:result[0].question,user:usr})
    
    
    
    }

    var create=async (req,res)=>{

        const token=req.token;

     jwt.verify(token, 'AK', function(err, user) {
         
        if(err) throw err;
       


        const newQuize=new quize({
            user:{

                _id: user._id,
            
                
            },
            question:[
                {
                    ques:'what is your name ?',
                    ans:'ahmed',
                    dumyQes:['ahmed','ali','bla']
                },
                {
                    ques:'how old are you ?',
                    ans:'21',
                    dumyQes:['15','20','21']
                },
                {
                    ques:'are u a gay',
                    ans:'no',
                    dumyQes:['yes','no']
                },



            ]



        })

        newQuize.save()

      var us=await user.findOne({_id:"5e70ecf9a8b56334786d8791"})
      us.quizes.push( { _id: new mongoose.Types.ObjectId("5e70ecf9a8b56334786d8791")})
      us.save()
      

       

        
        res.status(200);
        res.json({data:"sucessCreate"})
        










       });


        //login logic
       
       
            


            
        

        
        
        }


        var quizeResult=(req,res)=>{

            //login logic
            
            res.status(200);
            res.json({Result:"result"})
            
            
            
            }

           var follow;

module.exports={
register,
login,
home,
create,
quizeResult,
follow




}