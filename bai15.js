function isEqual(obj1, obj2) {
	let keyObj1 = 0;
	let keyObj2 = 0;

	const lengthObj1 = Object.keys(obj1).length;
	const lengthObj2 = Object.keys(obj2).length;

	for (const key in obj1) {
		const key1 = obj1[key].length;
		keyObj1 += key1;
	}

	for (const key in obj2) {
		const key2 = obj2[key].length;
		keyObj2 += key2;
	}

	if (lengthObj1 === lengthObj2 || keyObj1 === keyObj2) {
		return true;
	}

	return false;
}
