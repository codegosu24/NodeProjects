const mongoose=require('mongoose');

const Team=new mongoose.Schema({
    name:{type:String,default:''},
    city:{type:String,default:''},
    league:{type:String,default:''}
})

module.exports=mongoose.model('Team', Team)