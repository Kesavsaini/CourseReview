const router=require("express").Router();
const Rating=require("../models/Rating");
const Course=require("../models/Course");
//post a rating of a course
router.post('/newrating/:courseid',async(req,res)=>{
    let avgRating;
    if(req.body) avgRating=req.body.expectations+req.body.instructor+req.body.duration+req.body.skillup;
    avgRating/=4;
    const rating=new Rating({...req.body,courseId:rea.params.courseid,avg:avgRating});
    try{
     const newrating=await rating.save();
     const course=await Course.findById(req.params.courseid);
     let newcourserating=(course.rating+newrating.avg)/(course.studentno+1);
     await Course.findByIdAndUpdate(req.params.courseid,{$set:{"studentno":course.studentno+1,"rating":newcourserating}},{new:true})
     res.status(200).json(newrating);
   }catch(err){
    console.log(err);
    res.json(err);
   }
});
// getting all ratings by courseid
router.get('/get/courserating/:courseid',async(req,res)=>{
     try{
        const ratings=await Rating.find({courseId:req.params.courseid});
        res.status(200).send(ratings);
     }catch(err){
      console.log(err);
      res.json(err);
     }
})
// getting all ratings by userid
router.get('/get/userrating/:userid',async(req,res)=>{
  try{  
    const ratings=await Rating.find({courseId:req.params.courseid});
     res.status(200).send(ratings);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
// updating a rating
router.put('/update/rating/:ratingid',async(req,res)=>{
  try{
     const oldrating=await Rating.findById(req.params.ratingid);
     const course=await Course.findById(oldrating.courseId);
     let newrating=(course.rating*course.studentno)-(oldrating.avg);
     const rating=await Rating.findByIdAndUpdate(req.params.ratingid,{$set:req.body},{new:true});
     let avgRating=rating.expectations+rating.instructor+rating.duration+rating.skillup;
     avgRating/=4;
     const updatedrating=await Rating.findByIdAndUpdate(req.params.ratingid,{$set:{"avg":avgRating}},{new:true});
     newrating+=avgRating;
     newrating/=course.studentno;
     const newcourserating=await Course.findByIdAndUpdate(updatedrating.courseId,{$set:{"rating":newrating}},{new:true});
     res.status(200).send(updatedrating,newcourserating);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
//deleting a rating
router.delete('/delete/rating/:ratingid',async(req,res)=>{
  try{
     const oldrating=await Rating.findById(req.params.ratingid);
     const course=await Course.findById(oldrating.courseId);
     let newrating=(course.rating*course.studentno)-(oldrating.avg);
     newrating/=(course.studentno-1);
     await Course.findByIdAndUpdate(oldrating.courseId,{$set:{"rating":newrating}},{new:true});
     await Rating.findByIdAndDelete(req.params.ratingid);
     res.status(200).send("This teacher has been deleted");
  }catch(err){
   console.log(err);
   res.json(err);
  }
});
module.exports=router;
