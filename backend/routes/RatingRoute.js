const router=require("express").Router();
const Rating=require("../models/Rating");
const Course=require("../models/Course");
//post a rating of a course
router.post('/newrating/:courseid',async(req,res)=>{
    let avgRating;
    if(req.body) req.body.expectations+req.body.instructor+req.body.duration+req.body.skillup;
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
// getting all teachers 
router.get('/get/teachers',async(req,res)=>{
  const qCatogery=req.query.catogery;
  const qPlatform=req.query.platform;
  try{
    let teachers;
    if(qCatogery && qPlatform){
      teachers=await Teacher.find({catogries:{$in:[qCatogery]},platform:qPlatform});
    }else if(qCatogery){
      teachers=await Teacher.find({catogries:{$in:[qCatogery]}});
    }else if(qPlatform){
      teachers=await Teacher.find({platform:qPlatform});
    }else{
      teachers=await Teacher.find();
    }
     res.status(200).send(teachers);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
// updating a teacher
router.put('/update/teacher/:id',async(req,res)=>{
  try{
     const teacher=await Teacher.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).send(teacher);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
//deleting a teacher
router.delete('/delete/teacher/:id',async(req,res)=>{
  try{
     await Teacher.findByIdAndUpdate(req.params.id);
     res.status(200).send("This teacher has been deleted");
  }catch(err){
   console.log(err);
   res.json(err);
  }
});

module.exports=router;
