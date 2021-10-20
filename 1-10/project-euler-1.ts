// Multiples of 3 and 5

// If we list all the natural below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23. Find the sum of all multiples of 3 or 5 below 1000.

// --------------------

// sum(k) = n*(n+1)/2
function sumOfNumbers(n: number): number {
    return n * (n + 1) / 2;
}

// number of multiple of 3 below n = n/3
// same for 5 and 15
// we need to remove the sum of all multiple of 15 from the others two sums
// because they are multiples of 3 AND 5.
// sum(3k) = 3*(n/3)*(n/3 + 1)/2
// sum(5k) = 5*(n/5)*(n/5 + 1)/2
// sum(15k) = 15*(n/15)*(n/15 + 1)/2
const n = 999;
const answer = 3 * sumOfNumbers(Math.floor(n / 3)) +
    5 * sumOfNumbers(Math.floor(n / 5)) -
    15 * sumOfNumbers(Math.floor(n / 15));

console.log(answer);