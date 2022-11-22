const removeFromArray = function (array, ...theArgs) {
	for (let i = 0; i < theArgs.length; i++) {
		let arg = theArgs[i];
		array = array.filter((elem) => elem !== arg);
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
