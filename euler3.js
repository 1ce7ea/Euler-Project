var primes = [2],
	isPrime,
	end = false,
    j,
    i = 3,

largestPrimeFactor = function (someNumber) {

	while (someNumber % 2 === 0) {
		someNumber /= 2;
		//console.log("divided by 2 - it's now: " + someNumber);
	}

	for (i; end === false && i <= someNumber/2; i += 2) {
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
			while (someNumber % i === 0) {
				someNumber /= i;
				//console.log("It's " + someNumber + ", after dividing by " + i);
				if (someNumber === i) {
					primes.push(i);
					end = true;
				}
			}
			//console.log('push');
			primes.push(i);
		}
	}
	console.log(someNumber + " is the final result");
	return someNumber;
};

largestPrimeFactor(200);
console.log(primes);
