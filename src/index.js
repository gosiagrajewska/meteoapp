function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function refreshWeather(response) {
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#searched-city");
  cityElement.innerHTML = response.data.city;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src=${response.data.condition.icon_url} class="weather-icon-main">`;
  let timestamp = document.querySelector("#timestamp");
  timestamp.innerHTML = formatDate();
}
function formatDate() {
  let now = new Date();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentWeekday = weekDays[now.getDay()];
  let currentHours = now.getHours();
  let currentMinutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

  return `${currentWeekday}, ${currentHours}:${currentMinutes}`;
}
let searchedCity = document.querySelector("#search-form");
searchedCity.addEventListener("submit", showCity);
searchCity("Warsaw");
