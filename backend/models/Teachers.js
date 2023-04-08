const mongoose=require('mongoose');
const TeacherSchema = new mongoose.Schema({
    name:{type:String,required:true},
    platform:{type:String,required:true},
    catogries:{type:Array},
    rating:{type:Number,default:0},
    img:{type:String,required:true},
    desc:{type:String,required:true}
},{timestamps:true});
  
module.exports=mongoose.model('Teacher',TeacherSchema);