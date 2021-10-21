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
function largestPrimeFactor(num: number): number {
    const primeFactors: Array<number> = [];
    let count = 0;

    while (num % 2 === 0) {
        num = Math.floor(num / 2);
        count++;
    }

    if (count > 0) primeFactors.push(2);

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        count = 0;
        while (num % i === 0) {
            num = Math.floor(num / i);
            count++;
        }

        if (count > 0) primeFactors.push(i);
    }

    if (num > 2) primeFactors.push(num);

    return Math.max(...primeFactors);
}

const n = 600_851_475_143;
console.log(largestPrimeFactor(n));