const palindromes = function (string) {
	let newString = string
		.toLowerCase()
		.split("")
		.filter((letter) => /^[a-zA-Z]+$/.test(letter))
		.join("");

	console.log(newString);

	let reversedString = string
		.toLowerCase()
		.split("")
		.filter((letter) => /^[a-zA-Z]+$/.test(letter))
		.reverse()
		.join("");
	return reversedString === newString;
};

// console.log(palindromes("A car, a man, a maraca."));
console.log(palindromes("tacos"));

// Do not edit below this line
module.exports = palindromes;
