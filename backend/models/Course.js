const mongoose=require('mongoose');
const CourseSchema = new mongoose.Schema({
    name:{type:String,required:true},
    platform:{type:String,required:true},
    teacher:{type:String,required:true},
    catogries:{type:Array},
    rating:{type:Number,default:0},
    img:{type:String},
    desc:{type:String,required:true},
    studentno:{type:Number,default:0}
},{timestamps:true});
  
module.exports=mongoose.model('Course',CourseSchema);