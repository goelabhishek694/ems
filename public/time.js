 module.exports= function (){
        //  var time=response.data.Response.MetaInfo.Timestamp;
        
         var localDate = new Date();
        //  console.log(localDate);
        var date=localDate.getDate()+"-"+(localDate.getMonth()+1)+"-"+localDate.getFullYear();
         var time= localDate.getHours() + ":" + localDate.getMinutes() + ":" + localDate.getSeconds();
         return {date,time}
        
        }


        
        
        
        
        