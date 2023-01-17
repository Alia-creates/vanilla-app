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
  console.log(response.data);
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

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let key = "f135e1be3f84490782d52465398cdb5b";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(apiURL).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
