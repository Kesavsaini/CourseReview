const mongoose=require('mongoose');
const CourseSchema = new mongoose.Schema({
    name:{type:String,required:true},
    platform:{type:String,required:true},
    teacher:{type:String,required:true},
    catogries:{type:Array},
    rating:{type:Number,default:0},
    img:{type:String,default:"https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"},
    desc:{type:String,required:true},
    studentno:{type:Number,default:0}
},{timestamps:true});
  
module.exports=mongoose.model('Course',CourseSchema);