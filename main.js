//Declaring variables and constants
const zipInput = document.getElementById("zipInput");
const weatherButton = document.getElementById("weatherButton");
const cityOutput = document.getElementById("cityOutput");
const outputK = document.getElementById("outputK");
const outputF = document.getElementById("outputF");
const outputC = document.getElementById("outputC");
const condOutput = document.getElementById("condOutput");
const infoOutput = document.getElementById("infoOutput");


//async function
function getWeather() {
    const API_key = '8552952194f03a7096ea7450676ab6c3';
    //getting user zipcodevalue
    let zipCode = zipInput.value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_key}`; 
                    //https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
    console.log(zipCode);
    console.log(apiUrl);

    fetch(apiUrl)
        .then(function (response) {
            return response.json()

        })
        .then(function (json) {
            console.log(json);
            cityOutput.innerHTML = json.name;

            outputK.innerHTML = Math.round(json.main.temp) + '&deg K';

            outputF.innerHTML = Math.round(((json.main.temp - 273.15) * 9 / 5) + 32) + '&deg F'

            outputC.innerHTML = Math.round(json.main.temp - 273.15) + '&deg C';

            let conditionOutput = json.weather[0].description;
            condOutput.innerHTML = conditionOutput;
           
            infoOutput.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`;
        })
}
weatherButton.addEventListener('click', getWeather);

