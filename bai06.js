function isSymmetricNumber(n) {
	if (n.length > 3 || n < 0 || n > 999) {
		return false;
	}

	if (n < 10) {
		const firtNumber = Math.trunc(((n % 1000) / 10) * 10);
		const threeNumber = n % 10;
		return firtNumber === threeNumber;
	}

	if (n >= 100) {
		const firtNumber = Math.trunc(n / 100);
		const threeNumber = n % 10;
		return firtNumber === threeNumber;
	} else {
		const firtNumber = Math.trunc((n % 1000) / 10);
		const threeNumber = n % 10;
		return firtNumber === threeNumber;
	}
}

console.log(isSymmetricNumber(22));
