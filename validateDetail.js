var phoneForm=document.querySelector(".phoneForm");
var phoneSubmit=document.querySelector("#phoneSubmit");
var phoneInput=document.querySelector("#phoneInput");


async function submitDataPhoneNo(phoneVal){
    const response = await axios.post("/otp",{phoneNo:phoneVal});
    if(response.data.result){
        alert("user not found");
        
    }else{
        alert("user verified");
    }
}
if(phoneForm){
    phoneForm.addEventListener("submit",function(e){
        e.preventDefault();
        const phoneVal=phoneInput.value;
        submitDataPhoneNo(phoneVal);
    })
    }