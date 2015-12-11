var primes = [2],
	isPrime = true,
    j = 0,
    i = 3,

largestPrimeFactor = function (someNumber) {

  while (someNumber % 2 === 0) {
	//console.log(someNumber + ' ' + primes[j]);
	someNumber /= 2;
  }

  for (i; i*2 <= someNumber; i += 2) {

        for (j = 0; primes[j] < i/2; j++) {
			//console.log('check ' + i + ' divided by ' + primes[j] + ' - primes length is ' + primes.length);
			if (i % primes[j] === 0) {
				isPrime = false;
			} else {
				isPrime = true;
			}
		}
		
		if (isPrime) {
			while (someNumber % primes[j] === 0) {
				//console.log(someNumber + ' ' + primes[j]);
				someNumber /= primes[j];
				if (someNumber === primes[j]) {
					return someNumber;
				}
			}
			//console.log('push');
			primes.push(i);
		}
	}

  return someNumber;
};

largestPrimeFactor(243);
//console.log(primes);
