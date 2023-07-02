import showWeatherData from "./showWeatherData.js";
import * as getCurrentLocation from "./getLocation.js";

// FUNCTIONS ///////////////////
function getWeaterData(latitude, longitude){
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=6&daily=apparent_temperature_max,apparent_temperature_min,weathercode&timezone=GMT&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,visibility&current_weather=true`;
    fetch(apiUrl)
    .then((response) => response.json())
        .then((weatherData) => {
            console.log(weatherData);
            const currentTemperature = parseInt(weatherData.current_weather.temperature);
            const currentWeather = weatherData.current_weather.weathercode;
            const windSpeed = weatherData.current_weather.windspeed;
            const humidity = weatherData.hourly.relativehumidity_2m;
            const averageHumidity = Math.round(humidity.reduce((acumulator, nextValue) => {
                return acumulator + nextValue;
            }, 0) / humidity.length);
            showWeatherData(currentTemperature,currentWeather, windSpeed, averageHumidity);
        });
}

function readLocation(location){
    getWeaterData(location.coords.latitude, location.coords.longitude);
    getLocation(location.coords.latitude, location.coords.longitude);
}

function locationDenied(){
    alert("Please, give the authorization to view your current weather");
}

// HTML COMPONENTS /////////////
    const locate_btn = document.getElementById("locate");

// EVENT LISTENERS
locate_btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(readLocation, locationDenied);
});




