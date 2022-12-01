const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	// for loop solution
	/* let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum; */

	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function (array) {
	// for loop solution
	/* let product = 1;
	for (let i = 0; i < array.length; i++) {
		product *= array[i];
	}
	return product; */

	return array.reduce((product, num) => {
		return product * num;
	}, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (a) {
	// non recursive version
	/* let result = 1;
	for (let i = 1; i <= a; i++) {
		result *= i;
	}
	return result; */

	if (a === 0) {
		return 1;
	} else {
		return a * factorial(a - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
