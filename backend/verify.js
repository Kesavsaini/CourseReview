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
               req.body=user;
               next();
            }
        });
      }catch(err){
          console.log(err);
          res.json(err);
      }
    }else res.status(401).json("Unautherized");
}
const verifyAdmin=async(req,res,next)=>{
    const token=req.headers.token;
    if(token){
        try{
        const accesstoken=token.split(" ")[1];
        jwt.verify(accesstoken, 'koxxcrate123', (err,user)=>{
            if(err) res.json(err);
            else
            { 
               req.body=user;
               next();
            }
        });
      }catch(err){
          console.log(err);
          res.json(err);
      }
    }else res.status(401).json("Unautherized");
}