import showDate from "./getDate.js";
export default showCurrentWeatherData;

//HTML COMPONENTS////////////////////////////
    // -- MAIN WEATHER SECTION
const temperature = document.querySelector(".cantity");
const weatherStatus = document.querySelector(".wheater-status");
const todayDate = document.getElementById("date");

function showCurrentWeatherData(currentTemperature,currentWeather, windSpeed, averageHumidity){
    temperature.textContent = currentTemperature;
    
showDate(currentDate);

}