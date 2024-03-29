const mongoose=require('mongoose');
const RatingSchema = new mongoose.Schema({
   userId:{type:String,required:true},
   courseId:{type:String,required:true},
   comment:{type:String,required:true},
   expectations:{type:Number,required:true},
   instructor:{type:Number,required:true},
   duration:{type:Number,required:true},
   skillup:{type:Number,required:true},
   avg:{type:Number,default:0}
},{timestamps:true});
  
module.exports=mongoose.model('Rating',RatingSchema);