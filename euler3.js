var primes = [2],
    isPrime = true,
    j = 0,
    i = 3,

largestPrimeFactor = function (someNumber) {

  if (someNumber % 2 === 0) {
    //console.log(someNumber + ' ' + primes[i]);
    someNumber /= 2;
  } else if (someNumber === 2) {
    return someNumber;
  }

  for (i; i <= someNumber/2; i += 2) {
    
    //console.log('check ' + i + ' divided by ' + primes[j]);
    if (i % primes[j] === 0) {
      isPrime = false;
    } else {
        //console.log('push');
        primes.push(i);
        j++;
        while (someNumber % primes[i] === 0) {
          //console.log(someNumber + ' ' + primes[i]);
          someNumber /= primes[i];
          if (someNumber === primes[i]) {
            return someNumber;
          }
        }
      }
    
  }

  return someNumber;
};

largestPrimeFactor(243);
//console.log(primes);
