function largestPrimeFactor (someNumber) {
	
	var primes = [2],
	isPrime,
	k = 1,
    j,
    i = 3;

	for (i; k < someNumber; i+=2) {
		j = 0;
		isPrime = true;
		while (primes[j] < i/2) {
			if (i % primes[j] === 0) {
				isPrime = false;
				j = i;
			} else {
				j++;
			}
		}
		if (isPrime) {
			primes.push(i);
			k++;
		}
	}
	return primes[k-1];
};

largestPrimeFactor(10001);
