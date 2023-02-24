class WeatherClient {
  fetchWeatherData = (cityName) => {
    const apiKey = require("./apiKey");
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    let weatherData = null;

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        console.log("Weather Data for $(weatherData.name)");
        console.log(weatherData);
        return weatherData;
      });
  };
}

module.exports = WeatherClient;
