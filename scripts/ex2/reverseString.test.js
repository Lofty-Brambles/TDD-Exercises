import reverseString from "./reverseString";

describe("__Reverse String__", () => {
	test("Reverses a simple string", () => {
		expect(reverseString("hello")).toBe("olleh");
	});
	test("Reverses a string with spaces and punctuation.", () => {
		expect(reverseString("hello there, why?")).toBe("?yhw ,ereht olleh");
	});
	test("Reverses a string with mixed cases", () => {
		expect(reverseString("heLlo ThEre.")).toBe(".erEhT olLeh");
	});
});