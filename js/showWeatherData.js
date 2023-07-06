import showDate from "./getDate.js";
export default showCurrentWeatherData;

//HTML COMPONENTS////////////////////////////
const temperature = document.querySelector(".cantity");
const weatherStatus = document.querySelector(".weather-status");;
const todayDate = document.getElementById("date");
const windSpeed = document.getElementById("windSpeed");
const humidityNum = document.getElementById("humidityPercentage");
const visibilityNum = document.getElementById("visibilityCantity");
const pressureNum = document.getElementById("airPressureCantity");
const progressBar = document.getElementById("progress");

//FUNCTIONS///////////////////
function getWeatherStatus(weathercode) {
    switch (weathercode) {
        /*
        Code	Description
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
        */
        case 0: return "Clear sky";
        case 1: return "Mainly clear";
        case 2: return "Partly cloudy";
        case 3: return "Overcast";
        case 45: return "Fog";
        case 48: return "Depositing rime fog";
        case 51: return "Light drizzle";
        case 53: return "Moderate drizzle";
        case 55: return "Dense drizzle";
        case 56: return "Light freezing drizzle";
        case 57: return "Dense freezing drizzle";
        case 61: return "Slight rain";
        case 63: return "Moderate rain";
        case 65: return "Heavy rain";
        case 66: return "Light freezing rain";
        case 67: return "Heavy freezing rain";
        case 71: return "Slight snow fall";
        case 73: return "Moderate snow fall";
        case 75: return "Heavy snow fall";
        case 77: return "Snow grains";
        case 80: return "Slight rain showers";
        case 81: return "Heavy rain showers";
        case 82: return "Violent rain showers";
        case 85: return "Slight snow showers";
        case 86: return "Heavy snow showers";
        case 95: return "Thunderstorm";
        case 96: return "Thunderstorm with slight hail";
        case 99: return "Thunderstorm with heavy hail";
    }
}

function changeWeatherIcon(weathercode){

}

function showCurrentWeatherData(currentTemperature, currentWeather, windSpeedData, averageHumidity, averageVisibility,averagePressure) {
    temperature.textContent = currentTemperature;
    windSpeed.textContent = windSpeedData;
    weatherStatus.textContent = getWeatherStatus(currentWeather);
    humidityNum.textContent = averageHumidity;
    progressBar.style.width = `${averageHumidity}%`;
    visibilityNum.textContent = averageVisibility;
    pressureNum.textContent = averagePressure;
    // pressureNum.textContent = averageVisibility;
    changeWeatherIcon(currentWeather);
}

window.addEventListener("load", () => {
    todayDate.innerText = showDate();
    const weeklyPronostic = document.querySelectorAll("[data-pronosticDate]");
    const dayMax = document.querySelectorAll("[data-weekDayMax]");
    const dayMin = document.querySelectorAll("[data-weekDayMin]");
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let actualDate = new Date();
    let day = actualDate.getDay();
    for (let i = 0; i < weeklyPronostic.length; i++) {
        let dayCode = weeklyPronostic[i].dataset.pronosticdate;
        if (dayCode == 1) {
            weeklyPronostic[i].textContent = "Tomorrow";
        } else{
            if (day == weekday.length-1) {
                day = 0;
                weeklyPronostic[i].textContent = weekday[day];
            } else{
                day += 1;
                weeklyPronostic[i].textContent = weekday[day];
            }
        }
        console.log(weekday[day]);
    }
});