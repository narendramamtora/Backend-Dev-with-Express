const express= require('express');

const exporter= express();

exporter.use((req,res,next)=>{
    console.log('in the middleware!');
    next();
});
exporter.use((req,res,next)=>{
    console.log('2 in the middleware!');
    
});

exporter.listen(4000)