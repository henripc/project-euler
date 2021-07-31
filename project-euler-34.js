// Digit factorials

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

// --------------------

function factorial(number) {
    let factorialResult = 1;
    for (let i = 1; i <= number; i++) factorialResult *= i;

    return factorialResult;
}

const limit = 100_000;
let sumOfFactorials;
let result = 0;

for (let i = 10; i < limit; i++) {
    sumOfFactorials = i.toString().split("").map(x => factorial(Number(x)))
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    if (i === sumOfFactorials) result += i;
}

console.log(result);