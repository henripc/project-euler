// Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

// --------------------

// https://en.wikipedia.org/wiki/Least_common_multiple
// https://en.wikipedia.org/wiki/Greatest_common_divisor
// https://en.wikipedia.org/wiki/Euclidean_algorithm

// LCM - Least Common Multiple
// LCM(x1, x2, ..., xk) = LCM(...LCM(LCM(x1, x2), x3), ...), xk)
function lcm(a, b) {
    return Math.floor(a / gcd(a, b)) * b;
}

// GCD - Greatest Common Divisor
// Euclidean algorithm
function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}

let answer = 1;
for (let i = 1; i <= 20; i++) {
    answer = lcm(answer, i);
}
console.log(answer);