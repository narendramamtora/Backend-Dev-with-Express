const expresser=require('express');

const router=expresser.Router();

// admin =>GET
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>')    

});

// admin =>POST
router.post('/add-product',(req,res,next)=>{  //here we can use exporter.get and exporter.post
    console.log(req.body);   
    // to remove onject null propotype we can use console.log(JSON.stringify(req.body)); 
    res.redirect('/');  
});

module.exports=router;
