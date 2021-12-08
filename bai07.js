function removeVowel(str) {
	if (str === '') return '';

	const removeVow = str
		.replace('u', '')
		.replace('e', '')
		.replace('o', '')
		.replace('a', '')
		.replace('i', '')
		.trim();

	return removeVow;
}
