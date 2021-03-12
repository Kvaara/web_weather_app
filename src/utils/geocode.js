const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoia3ZhYXJhIiwiYSI6ImNrazBibXdpNjBmbnEydXBjNTk2dGZhZWUifQ.wZOmbZgMPd1icOCWIoRI0A&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services.");
    } else if (body.message === "Not Found" || body.features.length === 0) {
      callback("Geolocation could not be found");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
