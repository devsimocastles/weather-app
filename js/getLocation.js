
const locationSpan = document.querySelector(".location");

function getLocation(latitude, longitude) {
  const apiUrl = `
  https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_f8be6d62099644749b731a96c15cea83`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(result => locationSpan.innerText = result.locality);
}

export {getLocation}
