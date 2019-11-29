var detailForm=document.querySelector("#Details-Form");

        var vname=document.getElementById("vname");
        var vemail=document.getElementById("vemail");
var vphoneno=document.getElementById("vphoneno");
var hname=document.getElementById("hname");
var hemail=document.getElementById("hemail");
var hphoneno =document.getElementById("hphoneno");

// function getLocation(){
// // var answer=null
//     navigator.geolocation.getCurrentPosition(position => {
//         var lat = position.coords.latitude;
//         var lng = position.coords.longitude;
//         address(lat,lng);
//     });
// }
// var response;
var promise=new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(position => {
       
        resolve(position);
    });
} )
async function address() {
    // console.log(x, y)
    // var lat,lng;
   const position=await promise;
   console.log(position);
    var lat=position.coords.latitude;
    var lng=position.coords.longitude
    var response = await axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=pzHvyHxlO4VtQG6IFyMV&app_code=kJqGg033KFsMNOTGuM3dhA&mode=retrieveAddresses&prox=${lat},${lng},1`);
    console.log(response);

    return response.data.Response.View[0].Result[0].Location.Address.Label
}
        async  function submitData(vnameVal,vemailVal,vphonenoVal,hnameVal,hemailVal,hphonenoVal,answer){
            const response=await axios.post("/submit",{
                vname:vnameVal,
                vemail:vemailVal,
                vphoneno:vphonenoVal,
                hname:hnameVal,
                hemail:hemailVal,
                hphoneno:hphonenoVal,
                visitAddress:answer
            });
            if(response.data.result){
                alert("user verified");
                location.assign("/index.html");
            }else{
                alert("user not verified");
            }
        }
        if(detailForm){
            detailForm.addEventListener("submit",async function(e){
    e.preventDefault();
        const  vnameVal=vname.value;
        const vemailVal=vemail.value;
        const vphonenoVal=vphoneno.value;
        const hnameVal=hname.value;
        const hemailVal=hemail.value;
        const hphonenoVal=hphoneno.value;
        const answer=await address();
submitData(vnameVal,vemailVal,vphonenoVal,hnameVal,hemailVal,hphonenoVal,answer);
    })
}