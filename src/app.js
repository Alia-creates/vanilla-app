function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}: ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.deg;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = response.data.main.pressure;

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let key = "f135e1be3f84490782d52465398cdb5b";
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f135e1be3f84490782d52465398cdb5b";

axios.get(apiURL).then(showTemperature);
