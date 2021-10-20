// Double-base palindromes

// The decimal number, 585 = 1001001001(binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

// --------------------

// Verify if a given number is a palindrome
function isNumberPalindrome(num: number | string): boolean {
    if (typeof num === "string") {
        return num === num.split("").reverse().join("");
    }

    const reversedNumber = num.toString().split("").reverse().join("");
    return num.toString() === reversedNumber;
}

const limit = 1_000_000;
let result = 0;

for (let i = 1; i < limit; i++) {
    if (isNumberPalindrome(i) && isNumberPalindrome(i.toString(2))) result += i;
}

console.log(result);