// toggle search menu ////////////
const searchCb = document.getElementById("cb");
const mainWeatherSection = document.getElementById("mainWeatherSection");
searchCb.addEventListener("click", (e) => {
    let menuWrapper = document.querySelector(".menu-wrapper");
    let closeBtn = document.getElementById("close-btn");
    menuWrapper.style.bottom = ((mainWeatherSection.clientHeight - menuWrapper.clientHeight)*1)+"px";
    closeBtn.addEventListener("click", () => {
        menuWrapper.style.bottom = "105%";
  
    })

})