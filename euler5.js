function smallestMultiple (x) {
	var factors,
		result = x,
		flag = false;
		
	for (result; flag === false; result+=x) {
		factors = x;
		while ((result % factors === 0) && (factors > 1)) {
			factors--;
			if (factors === 1) {
        flag = true;
				return result;
			}
		}
	}
}
