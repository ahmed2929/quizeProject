const mongoose=require('mongoose');

const Schema=mongoose.Schema;

var quize=new Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    question:[
            {
                ques:String,
                ans:String,
                dumyQes:[String]

            }
    ]
    




})

module.exports=mongoose.model('quize',quize)