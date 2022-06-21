/*
 * Multiples of 3 and 5
 * 
 * If we list all the natural below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all multiples of 3 or 5 below 1000.
 */

public final class Euler0001 {
    public static void main(String[] args) {
        System.out.println(solution());
    }

    // sum(k) = n*(n+1)/2
    private static int sumOfNumbers(final int number) {
        return number * (number + 1) / 2;
    }

    // number of multiple of 3 below n = n/3
    // same for 5 and 15
    // we need to remove the sum of all multiple of 15 from the others two sums
    // because they are multiples of 3 AND 5.
    // sum(3k) = 3*(n/3)*(n/3 + 1)/2
    // sum(5k) = 5*(n/5)*(n/5 + 1)/2
    // sum(15k) = 15*(n/15)*(n/15 + 1)/2
    public static String solution() {
        final int n = 999;
        final int answer = 3 * sumOfNumbers(n / 3) +
                           5 * sumOfNumbers(n / 5) -
                           15 * sumOfNumbers(n / 15);
        
        return Integer.toString(answer);
    }
}