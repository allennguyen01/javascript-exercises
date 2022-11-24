const convertToCelsius = function (fTemp) {
	let celsuis = (5 / 9) * (fTemp - 32);
	let celsuisRounded = Math.round(celsuis * 10) / 10;
	return celsuisRounded;
};

const convertToFahrenheit = function (celsuis) {
	let fahrenheit = (9 / 5) * celsuis + 32;
	let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
	return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
