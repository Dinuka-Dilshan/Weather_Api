const {getDate} = require('./getDate');

const filterData = (data,location) => {

    const fornextDays = [...data.daily.slice(1,5)];

    const nextDays = fornextDays.map(day=>{
        return {
            day:getDate(day.dt),
            main_description:day.weather[0].main,
            temp:day.temp.day,
            image:`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
        }
    })


  const processedData = {
    today: {
      temperature: data.current.temp,
      main_description: data.current.weather[0].main,
      sub_description: data.current.weather[0].description,
      image: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`,
      location: location.results[0].formatted_address,
    },

    today_highlight: [
      {
        name: "Pressure",
        value: `${data.current.pressure} hPa`,
        image:'http://cdn.onlinewebfonts.com/svg/img_262976.png'
      },
      {
        name: "Humidity",
        value: `${data.current.humidity}%`,
        image:'https://cdn-icons-png.flaticon.com/512/219/219816.png'
      },
      {
        name: "Wind Speed",
        value: `${data.current.wind_speed} m/s`,
        image:'https://cdn-icons-png.flaticon.com/512/172/172922.png'
      },
      {
        name: "UV Index",
        value: data.current.uvi,
        image:'https://cdn0.iconfinder.com/data/icons/weather-433/24/weather-uv-512.png'
      },
    ],
    nextDays
  };




  return processedData;
};

module.exports.filterData = filterData;
