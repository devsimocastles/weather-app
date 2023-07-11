
import { getWeaterData } from "./getWeatherData.js";
import { getLocation } from "./getLocation.js";

const search_bar = document.getElementById("location");
const country = document.getElementById("country");
const form = document.getElementById("form");
const result_container = document.getElementById("results");



function sendCoords(e){
    const lat = e.target.dataset.lat;
    const lon = e.target.dataset.lon;
    getLocation(lat,lon);
    getWeaterData(lat, lon);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let encodeParameters = encodeURI(`${search_bar.value},+${country.value}`);
    const geocodeApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeParameters}&key=43989616dfc84015b6fe9bb9ff53db9e&language=es&pretty=1`;
    result_container.innerText = "Loading...";
    fetch(encodeURI(geocodeApiUrl))
        .then((rowData) => rowData.json())
        .then((result) => {

            if (result.total_results < 1) {
                alert("No results have been found!")
            } else {
                // creating the result component
                console.log(result.results);
                result_container.innerText = "Results:";
                for (let i = 0; i < result.results.length; i++) {
                    let result_btn = document.createElement("button");
                    result_btn.classList.add("result_btn");
                    result_btn.textContent = result.results[i].formatted;
                    // adding the dataset variables
                    result_btn.dataset.lat = result.results[i].geometry.lat;
                    result_btn.dataset.lon = result.results[i].geometry.lng;
                    //adding the click event to send the coords to getweaterdata
                    result_btn.addEventListener("click", sendCoords);
                    // adding the created button to the results container
                    result_container.appendChild(result_btn);
                }
            }
        })
        .catch(e => alert(e));
})