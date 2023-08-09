const http = require('http')

const express= require('express');

const exporter= express();

exporter.use((req,res,next)=>{
    console.log('in the middleware!');
    next();
});
exporter.use((req,res,next)=>{
    console.log('2 in the middleware!');
    
});

const server = http.createServer(exporter);

server.listen(4000)