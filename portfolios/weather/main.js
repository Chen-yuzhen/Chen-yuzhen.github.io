window.onload = function() {
    geoFindMe();
    date_catch();
}

// ---------- Locaion ----------
var lat;
var lon;

function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const container = document.querySelector('.container');
    const dateTime = document.querySelector('.date-time');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const key = '6782a74277a5428c1c0c096297eff3c7';

        status.textContent = '';
        mapLink.style.display = "block";
        container.style.display = "flex";
        dateTime.style.display = "flex";
        mapLink.href = `https://www.google.com.tw/maps/@${lat},${lon},17z`
        mapLink.innerHTML = 'Map ' + '<i class="fas fa-map-marker-alt"></i>';
        var wapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
        console.log(wapi);
        weatherBallon(wapi);
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

// ---------- Weather ----------

function weatherBallon(wapi) {
    fetch(wapi)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            document.getElementById('temp').innerHTML = ('Error');
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp));
    var t_min = Math.round(parseFloat(d.main.temp_min));
    var t_max = Math.round(parseFloat(d.main.temp_max));
    var description = d.weather[0].description;
    var icon = d.weather[0].icon;
    document.getElementById('description').innerHTML = description + `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">`;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('temp-range').innerHTML = '最低溫：' + t_min + '&deg;' + ' / ' + ' 最高溫：' + t_max + '&deg;';
    document.getElementById('location').innerHTML = '<i class="fas fa-quote-left"></i>  ' + d.name + ' <i class="fas fa-quote-right"></i>';

    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }

}

// ---------- Date&time ----------
function date_catch() {
    var Today = new Date();
    var day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var y = Today.getFullYear();
    var m = (Today.getMonth() + 1).toString();
    var d = (Today.getDate()).toString();
    document.getElementById('date').innerHTML = y + " . " + m.padStart(2, 0) + " . " + d.padStart(2, 0) + " . " + day[Today.getDay()];


    var hr = (Today.getHours()).toString();
    var min = (Today.getUTCMinutes()).toString();
    var sec = (Today.getSeconds()).toString();
    document.getElementById('time').innerHTML = hr.padStart(2, 0) + "：" + min.padStart(2, 0) + "：" + sec.padStart(2, 0);

    window.setTimeout("date_catch()", 1000);
}