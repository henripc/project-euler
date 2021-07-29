// Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//                                  a ^ 2 + b ^ 2 = c ^ 2

// For example, 3 ^ 2 + 4 ^ 2 = 9 + 16 = 25 = 5 ^ 2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// --------------------

// pythagorean triplets formula (Euclid's formula)
// a = m ^ 2 - n ^ 2
// b = 2mn
// c = m ^ 2 + n ^ 2
// where m, n are integers with m > n > 0.
// this formula does not generate all pythagorean triplets!!!
function solution() {
    const limit = 1000;
    let a, b, c = 0;
    for (let n = 1; n < limit; n++) {
        for (let m = n + 1; m < limit + 1; m++) {
            a = m * m - n * n;
            b = 2 * m * n;
            c = m * m + n * n;
            if (a + b + c == limit) return a * b * c
        }
    }

    return 0;
}

console.log(solution());