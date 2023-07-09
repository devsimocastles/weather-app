

const search_bar = document.getElementById("location");
const country = document.getElementById("country");
const form = document.getElementById("form");
const result_container = document.getElementById("results");

console.log(result_container);



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let encodeParameters = encodeURI(`${search_bar.value},+${country.value}`);
    const geocodeApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeParameters}&key=43989616dfc84015b6fe9bb9ff53db9e&language=es&pretty=1`;    
    console.log(geocodeApiUrl);
    fetch(encodeURI(geocodeApiUrl))
        .then((rowData) => rowData.json())
            .then((result) => {
                console.log(result);
                if (result.total_results <= 1) {
                    alert("No results have been found!")
                } else{
                // creating the result component
                let result_btn = document.createElement("button");
                result_btn.classList.add("result_btn");
                result_btn.textContent = result.results[0].formatted;
                // adding the dataset variables
                result_btn.dataset.lat = result.results[0].geometry.lat;
                result_btn.dataset.lon = result.results[0].geometry.lng;
                // adding the created button to the results container
                result_container.appendChild(result_btn);
                console.log(result_btn);
                }
            })
        .catch(e => alert(e));
})