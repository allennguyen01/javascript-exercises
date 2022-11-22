const removeFromArray = function (array, ...theArgs) {
	do {
		let elemToRemove = theArgs.shift();
		let indexToRemove = array.indexOf(elemToRemove);
		if (indexToRemove !== -1) {
			array.splice(indexToRemove, 1);
		}
	} while (theArgs.length !== 0);

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
