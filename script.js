document.addEventListener("DOMContentLoaded", function () {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "68d3b4d294msh9a1bad1de83d035p15e767jsnfb0a4e0b8927",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };
  
    const getWeather = async (city, prefix = "") => {
      try {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
  
        if (!prefix) {
          // Update weather data for the main city
          document.getElementById("cityName").innerHTML = result.location.name;
          document.getElementById("condition_text").innerHTML = `Condition: ${result.current.condition.text}`;
          document.getElementById("name").innerHTML = result.location.name;
          document.getElementById("region").innerHTML = "Region: " + result.location.region;
          document.getElementById("country").innerHTML = "Country: " + result.location.country;
          document.getElementById("lat").innerHTML = "Latitude: " + result.location.lat;
          document.getElementById("lon").innerHTML = "Longitude: " + result.location.lon;
          document.getElementById("tz_id").innerHTML = "Timezone: " + result.location.tz_id;
          document.getElementById("temp_c").innerHTML = result.current.temp_c ;
          document.getElementById("temp_f").innerHTML = "Temperature (°F): " + result.current.temp_f;
          document.getElementById("feelslike_c").innerHTML = "Feels Like (°C): " + result.current.feelslike_c;
          document.getElementById("wind_kph").innerHTML = "Wind Speed (kph): " + result.current.wind_kph;
          document.getElementById("pressure_in").innerHTML = "Pressure (in): " + result.current.pressure_in;
          document.getElementById("precip_in").innerHTML = "Precipitation (in): " + result.current.precip_in;
          document.getElementById("humidity").innerHTML = "Humidity (%): " + result.current.humidity;
          document.getElementById("dewpoint_c").innerHTML = "Dew Point (°C): " + result.current.dewpoint_c;
        } else {
          // Update weather data for other cities
          document.getElementById(`${prefix}_temp_c`).innerHTML = result.current.temp_c + " °C";
          document.getElementById(`${prefix}_wind_kph`).innerHTML = result.current.wind_kph + " kph";
          document.getElementById(`${prefix}_pressure_in`).innerHTML = result.current.pressure_in + " in";
          document.getElementById(`${prefix}_precip_in`).innerHTML = result.current.precip_in + " in";
          document.getElementById(`${prefix}_humidity`).innerHTML = result.current.humidity + " %";
          document.getElementById(`${prefix}_dewpoint_c`).innerHTML = result.current.dewpoint_c + " °C";
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
  
    const fetchWeatherForCities = () => {
      const cities = ["Chennai", "Kolkata", "Lucknow", "Hyderabad", "Goa", "Jaipur"];
      cities.forEach((city) => {
        getWeather(city, city.toLowerCase());
      });
    };
  
    // Event listener for button click
    const submitButton = document.getElementById("submit");
    const cityInput = document.getElementById("city");
  
    if (submitButton && cityInput) {
      submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const city = cityInput.value.trim(); // Get city from input
        if (city) {
          getWeather(city); // Call the getWeather function with the entered city
        }
      });
    }
  
    // Fetch weather for the default city and common cities
    getWeather("Mumbai");
    fetchWeatherForCities();
  });
  