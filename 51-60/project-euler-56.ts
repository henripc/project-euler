// Powerful digit sum

// A googol(10^100) is a massive number: one followed by one - hundred zeros; 100^100 is almost unimaginably large: 
// one followed by two - hundred zeros.Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum ?

// --------------------

const LIMIT = 100;
let result: number;
let maxResult = 0;

for (let i = 2n; i < LIMIT; i++) {
    for (let j = 1n; j < LIMIT; j++) {
        result = (i ** j).toString().split("").map(x => Number(x))
            .reduce((accumulator, currentValue) => accumulator + currentValue);
        maxResult = result > maxResult ? result : maxResult;
    }
}

console.log(maxResult);