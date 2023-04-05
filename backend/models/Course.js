const mongoose=require('mongoose');
const CourseSchema = new mongoose.Schema({
    name:{type:String,required:true},
    platform:{type:String,required:true},
    teacher:{type:String,required:true},
    catogries:{type:Array},
    rating:{type:Number,default:0},
    img:{type:String},
    desc:{type:String,required:true},
},{timestamps:true});
  
const Course=mongoose.model('Course',CourseSchema);