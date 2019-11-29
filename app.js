const express = require("express");
const path = require("path");
var smsFlag = null;
var emailFlag = null;
var app = express();
app.use(express.urlencoded({ extended: true })); // it adds url encoded string into request's body 
app.use(express.static('public'));
app.use(express.json());
var myTime = require('./public/time')
var otpGenerator = require('./public/otp')
// const dataArray = [];
const userModel=require("./db");
var sendSms = require('./public/msg');
var sendMail = require('./public/mail');
// var getLocation=require('./public/getLocation')
var outPhone = null;
var otp;
// Base Page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})


// Sending SMS and Email to Host after Visitor checks in
app.post("/submit", async function (req, res) {
    // console.log(req.body);
    smsFlag = 0;
    emailFlag = 0;
    var { date, time } = myTime()
    // req.body.visitAddress=getLocation()
    req.body.checkInTime = time
    req.body.date = date
    // req.body.checkOutTime=null
    console.log("submit post method")
    const { vname, vemail, vphoneno, hname, hemail, hphoneno ,visitAdress} = req.body;
    //   Sending mail 
    sendMail(hemail, emailFlag, vname, vemail, vphoneno);
    // Sending SMS
    sendSms(9999508409, hphoneno, smsFlag, vname, vemail, vphoneno, null, null, null, null);
    // dataArray.push(req.body);
    console.log(req.body)
    const user =await userModel.create(req.body);
    console.log(user);
    res.json({result:"user verified"});
    // console.log(dataArray);

    // res.sendFile(path.join(__dirname + "/public/index.html"));
})

// app.post("/formInput", function (req,res){
//     console.log(req.body);
//     res.json({result:"user verified"});
// })

// Enter Phone number
app.get("/checkout", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/checkout.html"));
})

// Get otp if phone number is valid in db
app.post("/otp", function (req, res) {
    smsFlag = 1;
    console.log("otp post method")
    const { phoneNo } = req.body;
    outPhone = phoneNo;
    var i;
    for (i = 0; i < dataArray.length; ++i) {
        if (dataArray[i]["vphoneno"] == phoneNo) {
            break;
        }
    }
     otp = otpGenerator();
    sendSms(9999508409, phoneNo, smsFlag, null, null, null, otp);

    console.log(req.body);
    res.sendFile(path.join(__dirname + "/public/otp.html"));

})
// OTP validation 
app.post("/check", function (req, res) {
    console.log(req.body);
    res.json({result:"user verified"});
    console.log("check post method")
    const { OTP } = req.body;
    if (OTP === otp) {
        console.log("OTP Validated");
        var { time } = myTime()
        var i;
        for (i = 0; i < dataArray.length; ++i) {
            if (outPhone == dataArray[i].vphoneno) {
                dataArray[i].checkOutTime = time;
                break; // flash message : you have been checked out succesfully and redirect to index.html
            }
        }
        sendMail(dataArray[i].vemail, emailFlag, dataArray[i].vname, null, dataArray[i].vphoneno, dataArray[i].checkinTime, dataArray[i].checkOutTime, dataArray[i].hname, dataArray[i].visitAdress);
        // req.body.checkOutTime=time;

        res.redirect("/");
    }
    res.end("<h1>otp entered is incorrect</h1>")
    // flash message : OTP incorrrect 
})

app.listen(3000, function () {
    console.log("server is listening on port 3000")
});