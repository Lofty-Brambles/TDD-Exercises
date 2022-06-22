function validator(key) {
	if (+key !== +key.toFixed(0)) return false;
	return true;
}

function siphon(key) {
	return ((key % 26) + 26) % 26;
}

function update(key, v) {
	if (/[A-Z]/.test(v)) return String.fromCharCode((v.charCodeAt(0)-65 + key ) % 26 + 65);
	return String.fromCharCode((v.charCodeAt(0)-97 + key ) % 26 + 97);
}

function revert(key, v) {
	if (/[A-Z]/.test(v)) return String.fromCharCode(((v.charCodeAt(0)-65 - key ) + 26) % 26 + 65);
	return String.fromCharCode(((v.charCodeAt(0)-97 - key ) + 26) % 26 + 97);
}

export default function caesarCipher(key) {
	const encrypt = str => {
		if (!validator(key)) return "Invalid key.";
		const mod = siphon(key);
		return str
			.split("")
			.map(v => (/[a-zA-Z]/.test(v) ? update(mod, v) : v))
			.join("");
	};
	const decrypt = str => {
		if (!validator(key)) return "Invalid key.";
		const mod = siphon(key);
		return str
			.split("")
			.map(v => (/[a-zA-Z]/.test(v) ? revert(mod, v) : v))
			.join("");
	};
	return { encrypt, decrypt };
}
