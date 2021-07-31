// Largest prime factor

// The prime factors of 13195 are, 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// --------------------

// Algorithm:
// step 1: While n is divisible by 2, save 2(one time) and divide n by 2.
// step 2: Now n must be odd.Loop from i = 3 to square root of n.While i divides n, 
//         save i(one time) and divide n by i, increment i by 2 and continue.
// step 3: If n is a prime number and greater than 2, then n will not become 1 by the 
//         above two steps.Save n if it is greater than 2.
function largestPrimeFactor(n) {
    let primeFactors = [];
    let count = 0;

    while (n % 2 === 0) {
        n = Math.floor(n / 2);
        count++;
    }

    if (count > 0) primeFactors.push(2);

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        count = 0;
        while (n % i === 0) {
            n = Math.floor(n / i);
            count++;
        }

        if (count > 0) primeFactors.push(i);
    }

    if (n > 2) primeFactors.push(n);

    return Math.max(...primeFactors);
}

const n = 600_851_475_143;
const answer = largestPrimeFactor(n);
console.log(answer);