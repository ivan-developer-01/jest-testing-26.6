const sum = require("./index");
const inputs = [];

for (let i = 0; i < 20; i++) {
	inputs.push([getRandomInt(100), getRandomInt(100)]);
}

const outputs = inputs.map(([a, b]) => a + b);

for (let i = 0; i < inputs.length; i++) {
	const item = inputs[i];
	it(`adds ${item[0]} + ${item[1]} to equal ${outputs[i]}`, () => {
		expect(sum(item[0], item[1])).toBe(outputs[i]);
	});
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}