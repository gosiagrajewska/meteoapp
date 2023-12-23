function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#searched-city");
  cityElement.innerHTML = searchInput.value;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", showCity);
