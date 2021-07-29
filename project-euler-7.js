// 10001st prime

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number ?

// --------------------

// See Project Euler question #3 (this one is modified because we don't need to keep the factors)
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }

    return true;
}

let count = 1;
let i = 3;
while (true) {
    if (isPrime(i)) {
        count++;
        if (count == 10_001) break;
    }
    i += 2;
}
console.log(i);