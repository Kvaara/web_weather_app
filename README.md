# web_weather_app
A web application where user can search a weather by address

You can test out this app through Heroku! https://kvaara-weather-webapp.herokuapp.com/

*** Installation ***
1. Download the project from GitHub.
2. Open the project directory in terminal or Gitbash and type in 'npm install' to install all the required dependencies
3. To run the app just type into the terminal 'npm run dev'.
4. The app should now be listening on port 3000. Head over to localhost:3000 (or 127.0.0.1:3000).

Future implementations that I might do:

implement the use of python. (Implement the use of geopy.geocoders like ArcGIS and geocode the address through that)
	- This way you don't need to use APIs 
	- You could implement the use of Folium into the web app. So everytime a user searches their address it'll also print in the address location in a map (like google map).
	  That map could appear below or to the right side of the page.
		* You could also show the user their latitude and longitude in the process
		* You could implement the above as a different search feature in the page or just print it to the basemap after user searches their weather.
		* And add a point that shows the user the address location, which they searched, in the map.
	- Improve the help and about pages (add your GitHub, for example) 
	- You could improve the API and use a different forecast API like Open Weather API
