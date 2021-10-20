// Self powers

// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

// --------------------

const limit = 1000;
let result = 0n;

for (let i = 1n; i <= limit; i++) {
    result += i ** i;
}

const answer = result.toString().substr(-10);
console.log(answer);