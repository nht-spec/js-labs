// using split
function extractDomainV1(email) {
	if (typeof email !== 'string') return '';
	const checkDomain = email.split('@');

	if (checkDomain[1] === undefined) return '';

	return checkDomain[1];
}

// // using indexOf() and slice()
function extractDomainV2(email) {
	if (typeof email !== 'string') return '';

	const index = email.indexOf('@');

	if (index > -1) return email.slice(index + 1);
	return '';
}
