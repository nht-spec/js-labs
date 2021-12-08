function getMaxDigit(n) {
	if (typeof n !== 'number' || n < 0 || n >= 1000) {
		return -1;
	}

	const ones = n % 10;
	const tens = (n % 100) / 10;
	const hunreds = n / 100;

	if (n > ones) n = ones;

	if (tens > n) n = tens;

	if (hunreds > n) n = hunreds;

	return Math.trunc(n);
}
