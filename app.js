const key = '64cc962540a7dca65d39453e5e413743';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}
function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('wind').innerHTML =  "Wind: " + d.wind.speed + " m/s";
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }
}
window.onload = function() {
    weatherBallon( "Tartu,EE" );
}