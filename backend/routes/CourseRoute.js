const router=require("express").Router();
const Course=require("../models/Course");
//post a course
router.post('/newcourse',async(req,res)=>{
    const course=new Course(req.body);
    try{
     const newcourse=await course.save();
     res.status(200).json(newcourse);
   }catch(err){
    console.log(err);
    res.json(err);
   }
});
// getting a course by id
router.get('/get/course/:id',async(req,res)=>{
     try{
        const course=await Course.findbyId(req.params.id);
        res.status(200).send(course);
     }catch(err){
      console.log(err);
      res.json(err);
     }
})
// getting all courses 
router.get('/get/courses',async(req,res)=>{
  const qCatogery=req.query.catogery;
  const qPlatform=req.query.platform;
  try{
    let courses;
    if(qCatogery && qPlatform){
      courses=await Course.find({catogries:{$in:[qCatogery]},platform:qPlatform});
    }else if(qCatogery){
      courses=await Course.find({catogries:{$in:[qCatogery]}});
    }else if(qPlatform){
      courses=await Course.find({platform:qPlatform});
    }else{
      courses=await Course.find();
    }
     res.status(200).send(courses);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
// updating a course
router.put('/update/course/:id',async(req,res)=>{
  try{
     const course=await Course.findbyIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).send(course);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
//deleting a course
router.delete('/delete/course/:id',async(req,res)=>{
  try{
     await Course.findbyIdAndUpdate(req.params.id);
     res.status(200).send("This course has been deleted");
  }catch(err){
   console.log(err);
   res.json(err);
  }
});

module.exports=router;
