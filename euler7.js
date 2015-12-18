var primes = [2],
	isPrime,
	k = 1,
    j,
    i = 3,

largestPrimeFactor = function (someNumber) {

	for (i; k < someNumber; i+=2) {
		//console.log("Start: Is " + i + " prime? Test number is " + someNumber);
		j = 0;
		isPrime = true;
		while (primes[j] < i/2) {
			//console.log('check ' + i + ' divided by ' + primes[j]);
			if (i % primes[j] === 0) {
				isPrime = false;
				j = i;
				//console.log(i + " is NOT prime" );
			} else {
				j++;
				//console.log(i + " is prime" );
			}
			//console.log("prime?: " + isPrime);
		}
		
		if (isPrime) {
			primes.push(i);
			k++;
		}
		
	}
	return primes[k-1];
};

largestPrimeFactor(100);
