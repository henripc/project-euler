// Summation of primes

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// --------------------

// See Project Euler question #7
// this function verify if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }

    return true;
}

const limit = 2_000_000;
let sumOfPrimes = 2;
for (let i = 3; i < limit; i += 2) {
    if (isPrime(i)) sumOfPrimes += i;
}
console.log(sumOfPrimes);