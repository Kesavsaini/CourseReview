const jwt=require('jsonwebtoken');
const verifyToken=async(req,res,next)=>{
    const token=req.headers.token;
    if(token){
        try{
        const accesstoken=token.split(" ")[1];
        jwt.verify(accesstoken, 'koxxcrate123', (err,user)=>{
            if(err) res.json(err);
            else
            { 
               req.user=user;
               next();
            }
        });
      }catch(err){
          console.log(err);
          res.json(err);
      }
    }else res.status(401).json("Unautherized");
}
const verifyAutherziationandToken=(req,res,next)=>{
   verifyToken(req,res,()=>{
     if(req.params.id===req.user.id || req.user.isAdmin){
        next();
     }else res.status(401).json("Unautherized");
   });
}
const verifyAdminandToken=(req,res,next)=>{
    verifyToken(req,res,()=>{
      if(req.user.isAdmin){
         next();
      }else res.status(401).json("Unautherized");
    })
 }
 module.exports={verifyToken,verifyAutherziationandToken,verifyAdminandToken};