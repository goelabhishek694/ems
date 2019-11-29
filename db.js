const mongoose=require("mongoose");
const validator=require("validator");
mongoose.connect("mongodb+srv://admin:admin@cluster0-pbwd9.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,
useCreateIndex:true,useUnifiedTopology:true});
const userSchema=new mongoose.Schema({
    vname:{
       type:String,
       required:true 
    },
    vemail:{
        type:String,
        required:true,
        validate:validator.isEmail
    },
    vphoneno:{
        type:Number,
        required:true,
        minlength:10
    },
    hname:{
        type:String,
        required:true 
     },
     hemail:{
         type:String,
         required:true,
         validate:validator.isEmail
     },
     hphoneno:{
         type:Number,
         required:true,
         minlength:10
     },
     checkInTime:{
         type:String,
         default:Date.now
     },
     checkOutTime:{
         type:String,
         default:"Pending"
     },
     date:{
         type:String,
         default:Date.now
     },
     visitAddress:{
         type:String,
         default:"Innovacer Office, Gautam Budh Nagar"
     }


    
})
const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;