export default function calculator(x, y) {
	const add = (x, y) => +x + +y;
	const substract = (x, y) => +x - +y;
	const multiply = (x, y) => +x * +y;
	const div = (x, y) => +x / +y;
	return {
		add, substract, multiply, div
	};
}