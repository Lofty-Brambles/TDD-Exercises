import calculator from "./calculator";

describe("__Calculator tests__", () => {
	let calc;

	beforeEach(() => {
		calc = new calculator();
	});

	test("Adds", () => {
		expect(calc.add(1, 2)).toBe(3);
	});
	test("Substracts", () => {
		expect(calc.substract(1, 2)).toBe(-1);
	});
	test("Multiplies", () => {
		expect(calc.multiply(1, 2)).toBe(2);
	});
	test("Divides", () => {
		expect(calc.div(1, 2)).toBe(0.5);
	});
});