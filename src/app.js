function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
}

let key = "f135e1be3f84490782d52465398cdb5b";
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Roseville&appid=f135e1be3f84490782d52465398cdb5b";

axios.get(apiURL).then(showTemperature);
