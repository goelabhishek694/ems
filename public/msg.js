const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: "4a61b23b",
    apiSecret: "nYnb6SajeluwJbz2"
  });

  module.exports=(from,to,smsFlag,vname,vemail,vphoneno,otp)=>{
      var text;
   if(smsFlag==0){  
       text = `You have a Visitor
    Here are the details
    Name: ${vname}
    Email: ${vemail}
    Phone Number: ${vphoneno}
    Regards,
    Team Innovacer`}
    else{
        text='Your OTP is '+ otp;
    }
    nexmo.message.sendSms(from, to, text)
};



