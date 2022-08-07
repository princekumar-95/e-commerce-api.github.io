const express=require('express');
const router=express.Router();

const{ Product }=require('../models/product');

//Get all Products

router.get('/api/products',(req,res)=>{
  Product.find({},(err,data)=>{

   if(!err){
    res.send(data);
   }else{
     console.log(err);
   }
  });

});

//Save Products

router.post('/api/products/add',(req,res)=>{
 const pd=new Product({
  name:req.body.name,
  quantity:req.body.quantity
 });
 pd.save((err,data)=>{
  res.status(200).json({code:200,message:'product added successfully',addProduct:data})
 });
});


// Get Single Product
router.get('/api/products/:id',(req,res)=>{

 Product.findById(req.params.id,(err,data)=>{

   if(!err){
    res.send(data);
   }else{
     console.log(err);
}});
});


// Update Product
router.put('/api/products/edit/:id',(req,res)=>{
 const pd={
  name:req.body.name,
  quantity:req.body.quantity
 };
 Product.findByIdAndUpdate(req.params.id,{ $set:pd},{new:true},(err,data)=>{
 
    if(!err){
     res.status(200).json({code:200,message:'product updated successfully',
        updateProduct:data
    })
    }else{
     console.log(err);
    }

 });
});


//Delete product

router.delete('/api/products/:id',(req,res)=>{
  
 Product.findByIdAndRemove(req.params.id,(err,data)=>{
  if(!err){
     res.status(200).json({code:200,message:'product deleted successfully',deleteProduct:data});
  }
 });
})
module.exports=router;
