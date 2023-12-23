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
}
let searchedCity = document.querySelector("#search-form");
searchedCity.addEventListener("submit", showCity);
searchCity("Warsaw");
