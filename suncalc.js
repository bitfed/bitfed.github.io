const SunCalc = require('suncalc');
const date = new Date(2023, 11, 15);
const times = SunCalc.getTimes(date, 37.747051319808044, -122.48603988829692)

const sunrise = times.sunrise;
const sunset = times.sunset;
// 37.747051319808044, -122.48603988829692


console.log("Sunrise: ", times.sunrise.toString(),"\n", "Sunset: ", times.sunset.toString());