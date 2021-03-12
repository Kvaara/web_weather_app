const weatherForm = document.querySelector(".search");
const searchInput = document.querySelector("input");

const locationP = document.querySelector("#location");
const forecastP = document.querySelector("#forecast");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = searchInput.value;

  forecastP.textContent = "Searching...";
  locationP.textContent = "";

  fetch(`/weather?address=${address}`, { method: "GET" })
    .then((weather) => {
      if (weather.ok)
        return weather.json().then((weatherParsed) => {
          if (weatherParsed.error) {
            locationP.textContent = weatherParsed.error;
            forecastP.textContent = "";
          } else {
            forecastP.textContent = `${weatherParsed.forecast}`;
            locationP.textContent = `Location: ${weatherParsed.location}. Address given '${weatherParsed.address}'.`;
          }
        });
      throw new Error("Weather couldn't be searched");
    })
    .catch((err) => {
      console.log(err);
    });
});
