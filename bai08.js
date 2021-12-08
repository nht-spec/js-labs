function formatSecondsV1(seconds) {
	if (typeof seconds !== 'number') return -1;

	if (seconds >= 0 && seconds < 10) {
		const secondNumber = '0';
		return `${secondNumber}${seconds}`;
	}
	if (seconds >= 10 && seconds < 60) {
		return `${seconds}`;
	}
}

// using slice()
function formatSecondsV2(seconds) {
	if (typeof seconds !== 'number') return -1;

	const format = seconds.toString().padStart(2, '0');

	return format.slice(0);
}
