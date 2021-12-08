function getTicketPrice(age) {
	if (typeof age !== 'number' || age > 125 || age < 0) return -1;

	if (age < 6 || age >= 70) return 0;

	if (age >= 6 && age <= 12) return '20:000 VND';

	if (age > 12) return '50:000 VND';

	return age;
}
