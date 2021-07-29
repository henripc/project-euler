// Largest palindrome product

// A palindromic number reads the same both ways.The largest palindrome made 
// from the product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// --------------------

// Smallest number made from the product of two 3-digit numbers: 100 * 100 = 10000
// Biggest number made from the product of two 3-digit numbers: 999 * 999 = 998001
function largestPalindrome() {
    const biggestNumber = 998_001;
    const smallestNumber = 10_000;

    for (let i = biggestNumber; i >= smallestNumber; i--) {
        if (isNumberPalindrome(i) && is3DigitNumberProduct(i))
            return i;
    }

    return 0;
}

// verify if the number is evenly divisible by a 3 - digit number
// and if the quotient is a 3 - digit number p / d = q -> p = d * q
function is3DigitNumberProduct(number) {
    for (let i = 999; i > 99; i--) {
        if ((number % i == 0) && Math.floor(number / i).toString().length == 3)
            return true;
    }

    return false;
}

// Verify if a given number is a palindrome
function isNumberPalindrome(number) {
    const reversedNumber = number.toString().split("").reverse().join("");
    return number.toString() == reversedNumber;
}

const answer = largestPalindrome();
console.log(answer);