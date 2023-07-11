import showDate from "./getDate.js";
export default showCurrentWeatherData;

//HTML COMPONENTS////////////////////////////
const temperature = document.querySelector(".cantity");
const weatherStatus = document.querySelector(".weather-status");;
const todayDate = document.getElementById("date");
const mainWeatherImg = document.getElementById("weather_img");
const windSpeed = document.getElementById("windSpeed");
const humidityNum = document.getElementById("humidityPercentage");
const visibilityNum = document.getElementById("visibilityCantity");
const pressureNum = document.getElementById("airPressureCantity");
const progressBar = document.getElementById("progress");
const weeklyPronostic = document.querySelectorAll("[data-pronosticDate]");
const pronosticImg = document.querySelectorAll("[data-pronosticImg]");
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

function changeWeatherIcon(weathercode) {
    let imgUrl = "";
    switch (weathercode) {
        case 0:
        case 1:
        case 2:
        case 3:
            imgUrl = "../assets/img/LightCloud.png";
            break;
        case 45:
        case 48:
            imgUrl = "../assets/img/HeavyCloud.png";
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            imgUrl = "../assets/img/Shower.png";
            break;
        case 61:
        case 63:
            imgUrl = "../assets/img/LightRain.png";
            break;
        case 65:
            imgUrl = "../assets/img/HeavyRain.png";
            break;
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
        case 85:
        case 86:
            imgUrl = "../assets/img/Sleet.png";
            break;
        case 71:
        case 73:
        case 75:
            imgUrl = "../assets/img/Snow.png";
            break;
        case 77:
            imgUrl = "../assets/img/Hail.png";
            break;
        case 95:
        case 96:
        case 99:
            imgUrl = "../assets/img/Thunderstorm.png";
            break;
    }
    return imgUrl;
}

function showWeeklyPronostic(min, max, weathercode) {
    for (let i = 0; i < weeklyPronostic.length; i++) {
        dayMax[i].textContent = max[i];
        dayMin[i].textContent = min[i];
        pronosticImg[i].src = `${changeWeatherIcon(weathercode[i])}`;
    }
}

function showCurrentWeatherData(currentTemperature, currentWeather, windSpeedData, averageHumidity, averageVisibility, averagePressure) {
    temperature.textContent = currentTemperature;
    windSpeed.textContent = windSpeedData;
    weatherStatus.textContent = getWeatherStatus(currentWeather);
    mainWeatherImg.src = `${changeWeatherIcon(currentWeather)
    }`;
    humidityNum.textContent = averageHumidity;
    progressBar.style.width = `${averageHumidity}%`;
    visibilityNum.textContent = averageVisibility;
    pressureNum.textContent = averagePressure;

    

}

todayDate.innerText = showDate();

window.addEventListener("load", () => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < weeklyPronostic.length; i++) {
        let dayCode = weeklyPronostic[i].dataset.pronosticdate;
        if (dayCode == 1) {
            weeklyPronostic[i].textContent = "Tomorrow";
        } 
        else{
            weeklyPronostic[i].textContent = weekday[i+2];
        }
    }
});

export {showCurrentWeatherData, showWeeklyPronostic}