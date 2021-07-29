// Power digit sum

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

// --------------------

// A fast algorithm for exponentiation: exponentiation by squaring.
// https://www.programminglogic.com/fast-exponentiation-algorithms/
function expo(a, b) {
    if (b == 1) return a;
    if (b == 2) return a * a;

    if (b % 2 == 0) return expo(expo(a, b / 2), 2);
    else return a * expo(expo(a, (b - 1) / 2), 2);
}

const result = expo(2n, 1000);
const answer = result.toString().split("").map(x => Number(x))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(answer);