import analyzeArray from "./analyze";

describe("__Analyze Array Tests__", () => {
	test("Checks for number array", () => {
		expect(analyzeArray([1, 2, 3, 4])).toEqual({
			average: 2.5,
			min: 1,
			max: 4,
			length: 4,
		});
	});
	test("Checks for negative number array", () => {
		expect(analyzeArray([-1, 2, -3, 4])).toEqual({
			average: 0.5,
			min: -3,
			max: 4,
			length: 4,
		});
	});
	test("Checks for string-type-as-number array", () => {
		expect(analyzeArray(["1", 2, 3, "4"])).toEqual({
			average: 2.5,
			min: 1,
			max: 4,
			length: 4,
		});
	});
	test("Checks for non-number array", () => {
		expect(analyzeArray([1, 2, 3, "hello"])).toEqual("Invalid Array");
	});
});
