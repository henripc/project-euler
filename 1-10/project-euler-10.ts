// Summation of primes

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// --------------------

// See Project Euler question #7
// this function verify if a number is prime
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

const limit = 2_000_000;
let sumOfPrimes = 2;
for (let i = 3; i < limit; i += 2) {
    if (isPrime(i)) sumOfPrimes += i;
}
console.log(sumOfPrimes);