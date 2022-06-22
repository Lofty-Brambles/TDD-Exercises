import caesarCipher from "./caesar";

describe("__Caesar Cipher Tests__", () => {
	test("Tests for invalid numbers", () => {
		const shifter = new caesarCipher(0.5);
		expect(shifter.encrypt("hello")).toBe("Invalid key.");
	});
	test("Checks one word", () => {
		const shifter = new caesarCipher(1);
		expect(shifter.encrypt("hello")).toBe("ifmmp");
	});
	test("Checks cases and spaces", () => {
		const shifter = new caesarCipher(1);
		expect(shifter.encrypt("HellO thEre")).toBe("IfmmP uiFsf");
	});
	test("Checks punctuation, binding and numbers", () => {
		const shifter = new caesarCipher(2);
		expect(shifter.encrypt("Awz, Hi there, 007!")).toBe("Cyb, Jk vjgtg, 007!");
	});
	test("Checks decrypting one word", () => {
		const shifter = new caesarCipher(1);
		expect(shifter.decrypt("ifmmp")).toBe("hello");
	});
	test("Checks decrypting cases and spaces", () => {
		const shifter = new caesarCipher(1);
		expect(shifter.decrypt("IfmmP uiFsf")).toBe("HellO thEre");
	});
	test("Checks decrypting punctuation, binding and numbers", () => {
		const shifter = new caesarCipher(2);
		expect(shifter.decrypt("Cyb, Jk vjgtg, 007!")).toBe("Awz, Hi there, 007!");
	});
});