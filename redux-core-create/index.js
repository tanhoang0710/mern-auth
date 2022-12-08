// The Factory Pattern

const addCounter = () => {
	let value = 0;

	const getValue = () => value;

	const addValue = (amount) => (value += amount);

	return {
		getValue,
		addValue,
	};
};

const counter = addCounter();
console.log(counter.getValue());
counter.addValue(5);
console.log(counter.getValue());
