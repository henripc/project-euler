// Sum square difference

// The sum of the squares of the first ten natural numbers is, 1 ^ 2 + 2 ^ 2 + ... + 10 ^ 2 = 385
// The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^ 2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and 
// the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// --------------------

// Sum of the first n natural numbers = n * (n + 1) / 2
// sum of the first squares = n * (n + 1) * (2 * n + 1) / 6
const n = 100;
const sumOfNumbersSquared = (n * (n + 1) / 2) ** 2;
const sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
const answer = sumOfNumbersSquared - sumOfSquares;
console.log(answer);