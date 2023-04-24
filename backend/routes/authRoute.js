const router=require("express").Router();
const User=require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
//create a user
router.post('/auth/create',async(req,res)=>{
    const user=new User({
        name:req.body.firstname+" "+req.body.lastname,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, 'koxxcrate123').toString()
      });
    try{
      const newuser=await user.save();
      res.status(200).json(newuser);
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
//login a user
router.post('/auth/login',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user) res.status(401).json("Wrong credentials");
        else{
        const Orgpassword=CryptoJS.AES.decrypt(user.password,'koxxcrate123').toString(CryptoJS.enc.Utf8);
         if(Orgpassword===req.body.password){
            let token = jwt.sign({id:user._id,isAdmin:user.isAdmin}, 'koxxcrate123', { expiresIn:"7d"});
            const {password,...other}=user._doc;
            res.status(200).json({...other,token});
         }else res.status(401).json("Wrong credentials");
        }
    }catch(err){
        console.log(err);
        res.json(err);
    }
});
module.exports=router;
