function validate(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(+arr[i])) return false;
	}
	return true;
}

export default function analyzeArray(arr) {
	if (!validate(arr)) return "Invalid Array";
	const arrV = arr.map(v => Number(v));
	return {
		average: arrV.reduce((x, y) => x + y) / arrV.length,
		min: arrV.reduce((x, y) => (x > y ? y : x)),
		max: arrV.reduce((x, y) => (x < y ? y : x)),
		length: arrV.length,
	};
}
