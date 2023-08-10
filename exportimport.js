const express= require('express');

const bodyparser= require('body-parser')

const exporter= express();

const adminroutes=require('./routes/admin')

const adminshop=require('./routes/shop')

exporter.use(bodyparser.urlencoded({extended:false}));

exporter.use('/admin',adminroutes);

exporter.use(adminshop);

exporter.use('/',(req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')     
});

exporter.listen(4000)