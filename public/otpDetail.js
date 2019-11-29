// import Axios from "axios";

var otpDetail=document.querySelector(".otpDetail");
var otpSubmit=document.querySelector("#otpSubmit");
var OTP=document.querySelector("#OTP");

async function submitDataOtp(otpVal){
    const response=await axios.post("/check",{otp:otpVal });
    if(response.data.result){
        alert("user verified");
    }else{
        alert("user not verified");
    }
}
if(otpDetail){
otpDetail.addEventListener("submit",function(e){
    e.preventDefault();
    const otpVal=OTP.value;
    submitDataOtp(otpVal);
})
}