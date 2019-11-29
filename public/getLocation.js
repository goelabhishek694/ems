module.exports = function () {
    // e.preventDefault();
    var answer = null;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            address(lat, lng);
        });
    }

    // var response;
    async function address(x, y) {
        console.log(x, y)
        var response = await axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=pzHvyHxlO4VtQG6IFyMV&app_code=kJqGg033KFsMNOTGuM3dhA&mode=retrieveAddresses&prox=${x},${y},1`);
        console.log(response);

        answer = response.data.Response.View[0].Result[0].Location.Address.Label
    }
    return answer;
}