function cloneObject(obj) {
	if (typeof obj !== 'object') return -1;

	const newObject = JSON.parse(JSON.stringify(obj));

	return newObject;
}
