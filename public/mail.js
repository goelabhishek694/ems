const nodemailer= require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "goelabhishek694@gmail.com", // enter company user id
      pass: "tfiksfubkqtawazs" // enter company pass 
    }
  });


  module.exports=(hemail,emailFlag,vname,vemail,vphoneno,checkInTime,checkOutTime,hname,visitAddress)=>{
      var output;
      if(emailFlag==0){
    output=`
    <p>You have a Visitor</p>
    <h3>Here are the details</h3>
    <li>Name: ${vname}</li>
    <li>Email: ${vemail}</li>
    <li>Phone Number: ${vphoneno}</li>
    <ul>
    <h3>Regards,</h3>
    <h3>Team Summer Geeks</h3>`}
    else{
        output=`
        <p>Thank You for your Visit</p>
        <h3>Here are the details from your visit</h3>
        <li>Name: ${vname}</li>
        <li>Phone Number: ${vphoneno}</li>
        <li>Check-in time: ${checkInTime}</li>
        <li>Check-out time: ${checkOutTime}</li>
        <li>Host Name: ${hname}</li>
        <li>Address Visited: ${visitAddress}</li>
        <ul>
        <h3>Regards,</h3>
        <h3>Team Summer Geeks</h3>`
    }
    let mailOptions ={
        from: '"Summer Geeks" <goelabhishek694@gmail.com>', // sender address
        to: hemail,             // list of receivers
        subject: "Visitor Information", // Subject line
        text: "Hello world?", // plain text body
        html:output// html body
      };
      transporter.sendMail(mailOptions)};