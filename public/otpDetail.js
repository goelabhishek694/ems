// import Axios from "axios";
// selection of otp form
var otpDetail=document.querySelector(".otpDetail");
// selection of submit button 
var otpSubmit=document.querySelector("#otpSubmit");
// selection of otp input box
var OTP=document.querySelector("#OTP");

async function submitDataOtp(otpVal){
    const response=await axios.post("/check",{OTP:otpVal });
    if(response.data.result){
        alert("checked out succesfully");
        location.assign("/index.html")
    }else{
        alert("OTP entered is incorrect");
    }
}
if(otpDetail){
otpDetail.addEventListener("submit",function(e){
    e.preventDefault();
    const otpVal=OTP.value;
    submitDataOtp(otpVal);
})
}