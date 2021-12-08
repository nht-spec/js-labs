// using indexOf()
function isSecureUrlV1(url) {
	if (url.indexOf('https', 0) !== -1) return true;

	if (url.indexOf('wss', 0) !== -1) return true;

	return false;
}

// using startsWith()
function isSecureUrlV2(url) {
	if (typeof url !== 'string') return false;

	if (url.startsWith('https')) return true;

	if (url.startsWith('wss')) return true;

	return false;
}
