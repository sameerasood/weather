const WeatherClient = require("./weatherClient.js");

describe("fetchWeatherClient", () => {
  it("it gets weather data for a city", (done) => {
    const client = new WeatherClient();
    client.fetchWeatherData("London").then((weatherData) => {
      expect(weatherData.name).toEqual("London");
      done();
    });
  });
});
