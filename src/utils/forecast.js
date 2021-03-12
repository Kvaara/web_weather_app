const request = require("postman-request");

const forecast = (longtitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=74c358ec18dc386b31e95fb479457f5c&query=${latitude},${longtitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services");
    } else if (body.success === false) {
      callback("Location could not be found");
    } else {
      const { temperature } = body.current;
      const { feelslike } = body.current;
      const data = `It's currently ${temperature} degrees outside. It feels like ${feelslike}.`;

      callback(undefined, data);
    }
  });
};

module.exports = forecast;
