const mongoose=require('mongoose');

const Schema=mongoose.Schema;

var user=new Schema({
name:String,
password:String,
email:String,
followers:[],
following:[],
quizes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'quize'
}]

})

module.exports=mongoose.model('user',user)