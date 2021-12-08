function findSecret(code) {
	if (typeof code !== 'string') return '';

	const newArr = code.split('');

	const isLowerCase = newArr.filter((x) => x !== x.toUpperCase()).join('');

	return isLowerCase;
}
