const expressshop=require('express');

const shoping=expressshop.Router();

shoping.get('/',(req,res,next)=>{
    res.send('<h1>second middleware</h1>')    
    
});

module.exports=shoping;
