const express= require('express');
const bodyparser= require('body-parser')
const exporter= express();

exporter.use(bodyparser.urlencoded({extended:false  }));

exporter.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>')    
});
exporter.use('/product',(req,res,next)=>{
    console.log(req.body);   
    // to remove onject null propotype we can use console.log(JSON.stringify(req.body)); 
    res.redirect('/');  
});

exporter.use('/',(req,res,next)=>{
    res.send('<h1>second middleware</h1>')    
    
});

exporter.listen(4000)
