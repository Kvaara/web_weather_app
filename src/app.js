const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

// Defining paths for Express config. For example, changing the 'views' default path to ../templates
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setting the view engine to use hbs and setting the views path to the path above.
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setting up a static directory for serving static html pages
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Kvaara",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Kvaara",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Helpful text :)",
    title: "Help",
    name: "Kvaara",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.json({
      error: "You must add an address!",
    });
  }

  // geocode(process.argv[2], (error, {longtitude, latitude, location}) => {}); gives a default value of empty array if object is null
  return geocode(address, (error, { longtitude, latitude, location } = {}) => {
    if (error)
      return res.json({
        error: "Unable to find a location. Check that the address is correct.",
      });
    forecast(longtitude, latitude, (error2, forecastData) => {
      if (error2) throw error2;
      return res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    error: "Help article not found.",
    title: "404",
    name: "Kvaara",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    error: "Page not found.",
    title: "404",
    name: "Kvaara",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
