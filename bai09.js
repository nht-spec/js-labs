const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
	const ss = (seconds % 60).toString().padStart(2, '0');

	const mm = Math.trunc((seconds / SECONDS_PER_MIN) % 60)
		.toString()
		.padStart(2, '0');

	const dd = Math.trunc(seconds / SECONDS_PER_HOUR)
		.toString()
		.padStart(2, '0');

	return `${dd}:${mm}:${ss}`;
}
