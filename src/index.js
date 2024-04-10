function refreshWeatherData(response) {
  let temperatureElement = document.querySelector(
    "#weather-app-temparature-value"
  );
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let temparature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temparature);
}

function searchCity(city) {
  let apiKey = "oa224383a3fb04434bf1df50f107516t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");
