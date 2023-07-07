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
const weeklyPronostic = document.querySelectorAll("[data-pronosticDate]");
const dayMax = document.querySelectorAll("[data-weekDayMax]");
const dayMin = document.querySelectorAll("[data-weekDayMin]");

//FUNCTIONS///////////////////
function getWeatherStatus(weathercode) {
    switch (weathercode) {
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

function showWeeklyPronostic(min, max){
    for (let i = 0; i < weeklyPronostic.length; i++) {
        dayMax[i].textContent = max[i];
        dayMin[i].textContent = min[i];
    }
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
    // for (let i = 0; i < weeklyPronostic.length; i++) {
    //     dayMax[i]
    // }
}

todayDate.innerText = showDate();

window.addEventListener("load", () => {

    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let actualDate = new Date();
    let day = actualDate.getDay() + 1;
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
        
    }
});

export {showCurrentWeatherData, showWeeklyPronostic}