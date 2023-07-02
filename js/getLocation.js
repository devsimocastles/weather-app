

function getLocation(latitude,longitude){
    fetch(`
    https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_f8be6d62099644749b731a96c15cea83`)
  .then(response => response.json())
  .then(result => console.log(result))
}
