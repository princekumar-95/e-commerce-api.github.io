const mongoose=require('mongoose');


// Product schema
const Product=mongoose.model('Product',{
   name:{
      type:String,
      required:true
   },
   quantity:{
      type:String,
      required:true
   }

});

module.exports={Product};
