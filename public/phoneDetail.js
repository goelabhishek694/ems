var phoneForm=document.querySelector(".phoneForm");
// var phoneSubmit=document.querySelector("#phoneSubmit");
var phoneInput=document.querySelector("#phoneInput");


async function submitDataPhoneNo(phoneVal){
    const response = await axios.post("/otp",{phoneNo:phoneVal});
    if(response.data.result){
        alert("user verified");
        location.assign("/otp.html")
    }else{
        alert("user not found");
       
    }
}
if(phoneForm){
    phoneForm.addEventListener("submit",function(e){
        e.preventDefault();
        const phoneVal=parseInt("91"+phoneInput.value);
        submitDataPhoneNo(phoneVal);
    })
    }