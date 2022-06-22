import capitalize from "./captitalize";

describe("__Capitalization tests__", () => {
	test("Capitalizes", () => {
		expect(capitalize("hello")).toBe("Hello");
	});
	test("Capitalizes wrt punctuation and spaces", () => {
		expect(capitalize("hello, how are you?")).toBe("Hello, how are you?");
	});
	test("Capitalizes only the first letter", () => {
		expect(capitalize("I didn't know.")).toBe("I didn't know.");
	});
	test("Capitalizes in any random sequence", () => {
		expect(capitalize("i diDn'T knoW to wEar tHat.")).toBe("I diDn'T knoW to wEar tHat.");
	});
});