// toggle search menu ////////////
const searchCb = document.getElementById("cb");
searchCb.addEventListener("click", (e) => {
    let menuWrapper = document.querySelector(".menu-wrapper");
    let closeBtn = document.getElementById("close-btn")

    menuWrapper.style.bottom = window.innerHeight - menuWrapper.clientHeight + "px";
    closeBtn.addEventListener("click", () => {
        menuWrapper.style.bottom = "110%";
    })

})