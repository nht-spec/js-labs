function getFullName(firstName, lastName) {
	let firstNames = '';
	let lastNames = '';

	if (firstName) {
		const upperCaseFisrtName = firstName.trim().charAt(0).toLocaleUpperCase();
		const lowerCaseFisrtName = firstName.trim().slice(1).toLocaleLowerCase();
		firstNames = upperCaseFisrtName.trim().concat(lowerCaseFisrtName);
	}

	if (lastName) {
		const upperCaseLastName = lastName.trim().charAt(0).toLocaleUpperCase();
		const lowerCaseLastName = lastName.trim().slice(1).toLocaleLowerCase();
		lastNames = upperCaseLastName.trim().concat(lowerCaseLastName);
	}

	if (firstName && lastName) {
		return `${firstNames.trim()} ${lastNames.trim()}`;
	}

	return `${firstNames.trim()}${lastNames.trim()}`;
}
