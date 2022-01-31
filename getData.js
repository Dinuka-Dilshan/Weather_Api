const axios = require("axios");
const {filterData} = require('./fiterData');

const getData = (req, res, next) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&&appid=${process.env.API_KEY}`
    )
    .then((response) => {
      const weatherData = response.data;
      axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAP}`
      ).then((response) => {
          const locationData = response.data;
          res.json(filterData(weatherData,locationData));
      }).catch(error=>{
        res.status(500).json(error.message);
      });


    }).catch(error=>{
        res.status(500).json(error.message);
    });

    
};

module.exports = getData;
