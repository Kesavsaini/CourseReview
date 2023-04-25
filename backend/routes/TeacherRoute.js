const router=require("express").Router();
const Teacher=require("../models/Teachers");
const {verifyToken,verifyAutherziationandToken,verifyAdminandToken}=require('../verify');
//post a teacher
router.post('/newteacher',verifyAdminandToken,async(req,res)=>{
    const teacher=new Teacher(req.body);
    try{
     const newteacher=await teacher.save();
     res.status(200).json(newteacher);
   }catch(err){
    console.log(err);
    res.json(err);
   }
});
// getting a teacher by id
router.get('/get/teacher/:id',async(req,res)=>{
     try{
        const teacher=await Teacher.findById(req.params.id);
        res.status(200).send(teacher);
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
router.put('/update/teacher/:id',verifyAdminandToken,async(req,res)=>{
  try{
     const teacher=await Teacher.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).send(teacher);
  }catch(err){
   console.log(err);
   res.json(err);
  }
})
//deleting a teacher
router.delete('/delete/teacher/:id',verifyAdminandToken,async(req,res)=>{
  try{
     await Teacher.findByIdAndUpdate(req.params.id);
     res.status(200).send("This teacher has been deleted");
  }catch(err){
   console.log(err);
   res.json(err);
  }
});

module.exports=router;
