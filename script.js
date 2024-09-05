function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?unitGroup=us&key=B4R5Q9RRRNHZSD7ULL5VD6CLZ&contentType=json`
  )
    .then((response) => response.json())
    .then((data) => {

      const { conditions, temp, humidity, windspeed, description, visibility } =
        data.days[0];

      weatherInfo.innerHTML = `
        <p>Description: ${description}</p>
        <p>Conditions: ${conditions}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Windspeed: ${windspeed} </p>
        <p>Humidity: ${humidity} </p>
        <p>Visibility: ${visibility} </p>
    `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML = `<p>Failed to fetch weather data for ${city}</p>`;
    });
}
