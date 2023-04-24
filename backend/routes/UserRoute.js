const router=require("express").Router();
const User=require('../models/User');
const CryptoJS=require('crypto');
const {verifyToken,verifyAutherziationandToken,verifyAdminandToken}=require('../verify');
//Delete a user
router.delete('/user/delete/:id',verifyAutherziationandToken,async(req,res)=>{
    try{
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User has been deleted");
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
//Update a user
router.put('/user/update/:id',verifyAutherziationandToken,async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password, 'koxxcrate123').toString()
    }
    try{
       const user=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
       const {password,...other}=user._doc;
       res.status(200).json(other);
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
// get a user
router.get('/user/get/:id',verifyAutherziationandToken,async(req,res)=>{
    try{
       const user=await User.findById(req.params.id);
       const {password,...other}=user._doc;
       res.status(200).json(other);
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
//get all users
router.get('/user/getall',verifyAutherziationandToken,async(req,res)=>{
    try{
       const users=await User.find().sort({createdAt:-1});
       res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
module.exports=router;