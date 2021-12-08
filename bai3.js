function getTaxiCount(passengersCount) {
	if (passengersCount > 0 && passengersCount < 4) return 1;

	if (passengersCount > 4 && passengersCount < 10) return 1;

	if (passengersCount >= 10 && passengersCount < 20) return 2;

	if (passengersCount >= 20) return 3;
}
