var primes = [2],
	isPrime = true,
    j = 0,
    i = 3,

largestPrimeFactor = function (someNumber) {

	while (someNumber % 2 === 0) {
		someNumber /= 2;
		console.log("divided by 2 - it's now: " + someNumber);
	}

	for (i; i <= someNumber/2; i += 2) {
		for (j = 0; primes[j] < i/2; j++) {
			console.log('check ' + i + ' divided by ' + primes[j]);
			if (i % primes[j] === 0) {
				isPrime = false;
				console.log(i + " is NOT prime" );
			} else {
				isPrime = true;
				console.log(i + " is prime" );
			}
			console.log("prime? " + i);
		}
		
		if (isPrime) {
			while (someNumber % i === 0) {
				console.log(someNumber + " at 4 when i is " + i + " and j is " + j);
				someNumber /= i;
				console.log(someNumber + " at 5 when i is" + i);
				if (someNumber === i) {
					return someNumber;
				}
			}
			//console.log('push');
			primes.push(i);
		}
	}
	console.log(someNumber + " at 6 when i is" + i);
	return someNumber;
};

largestPrimeFactor(200);
//console.log(primes);
