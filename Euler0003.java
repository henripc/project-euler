import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * Largest prime factor
 * 
 * The prime factors of 13195 are, 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

public final class Euler0003 {
    public static void main(String[] args) {
        System.out.println(solution());
    }

    // Algorithm:
    // step 1: While n is divisible by 2, save 2(one time) and divide n by 2.
    // step 2: Now n must be odd.Loop from i = 3 to square root of n.While i divides
    // n,
    // save i(one time) and divide n by i, increment i by 2 and continue.
    // step 3: If n is a prime number and greater than 2, then n will not become 1
    // by the
    // above two steps.Save n if it is greater than 2.
    private static int largestPrimeFactor(long number) {
        final List<Integer> primeFactors = new ArrayList<>();
        int count = 0;

        while (number % 2 == 0) {
            number /= 2;
            count++;
        }

        if (count > 0) primeFactors.add(2);

        for (int i = 3; i < Math.sqrt(number); i += 2) {
            count = 0;
            while (number % i == 0) {
                number /= i;
                count++;
            }

            if (count > 0) primeFactors.add(i);
        }

        if (number > 2) primeFactors.add((int) number);

        return Collections.max(primeFactors);
    }

    public static String solution() {
        final long n = 600_851_475_143L;
        return Integer.toString(largestPrimeFactor(n));
    }
}
