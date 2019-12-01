const express = require("express");
const path = require("path");
var smsFlag = null;
var emailFlag = null;
var app = express();
app.use(express.urlencoded({ extended: true })); // it adds url encoded string into request's body 
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'pug');
app
var myTime = require('./public/time')
var otpGenerator = require('./public/otpGenerator')
// const dataArray = [];
const userModel = require("./db");
var sendSms = require('./public/msg');
var sendMail = require('./public/mail');
// var getLocation=require('./public/getLocation')
var outPhone = null;
var otp=null;

// Base Page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})


// Sending SMS and Email to Host after Visitor checks in
app.post("/submit", async function (req, res) {
    
    const { vname, vemail,vphoneno, hname, hemail, hphoneno, visitAdress } = req.body;
    const guest=await userModel.findOne({vphoneno:vphoneno,checkOutTime:"Pending"});
    if(!guest){
    smsFlag = 0;
    emailFlag = 0;
    var { date, time } = myTime()
    // req.body.visitAddress=getLocation()
    req.body.checkInTime = time
    req.body.date = date
    // req.body.checkOutTime=null
    console.log("submit post method")
    
    //   Sending mail 
    sendMail(hemail, emailFlag, vname, vemail, vphoneno, null, null, null, null);
    // Sending SMS
    sendSms(9999508409, hphoneno, smsFlag, vname, vemail, vphoneno, null, null, null, null);
    // dataArray.push(req.body);
    console.log(req.body)
    const user = await userModel.create(req.body);
    // console.log(user);
    res.json({ result: "user verified" });
    }
    else{
        res.json({result:""})
    }
    // console.log(dataArray);

    // res.sendFile(path.join(__dirname + "/public/index.html"));
})

// Enter Phone number
app.get("/checkout", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/checkout.html"));
})

// Get otp if phone number is valid in db
app.post("/otp", async function (req, res) {
    const { phoneNo } = req.body;
    // phoneNo=parseInt()
    
   try{ smsFlag = 1;
    outPhone=phoneNo;
    console.log("otp post method")
    const guest=await userModel.findOne({vphoneno:outPhone,checkOutTime:"Pending"});
    if(guest){
        otp = otpGenerator();
        console.log(otp)
        sendSms(9999508409, phoneNo, smsFlag, null, null, null, otp);
        console.log(req.body);
        res.json({ result: "user verified" });
    }
    else{
        console.log("inside if ");
        res.json({result: "user not found"});
    }
   }
    catch(err){
        console.log(err);
    }
})
// OTP validation 
app.post("/check", async function (req, res) {
    console.log("check post method")
    const { OTP } = req.body;
    console.log(OTP);
    console.log(otp);

    try{
    if (OTP === otp) {
        console.log("OTP Validated");
        const query = {vphoneno:outPhone,checkOutTime:"Pending"}
        // const user=await userModel.findOne({vphoneno:outPhone})
        // const id=user._id;
        const{time} = myTime()
        await userModel.findOneAndUpdate(query,{checkOutTime:time})
        // send Email to visitor
        const user=await userModel.findOne({checkOutTime:time})
        const dataArray=user;
     sendMail (dataArray.vemail, emailFlag, dataArray.vname, null, dataArray.vphoneno, dataArray.checkinTime, dataArray.checkOutTime, dataArray.hname, dataArray.visitAdress);

    res.json({result:"checked out succesfully"});
    }
    else{
        res.json({result:""});
    }
}

catch(err){
    console.log(err);
}
})

app.get("/logbook", async function (req, res) {
    const users=await userModel.find();
    res.render("index",{users});
})

app.listen(3000, function () {
    console.log("server is listening on port 3000")
});
