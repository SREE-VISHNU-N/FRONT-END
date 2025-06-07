/* Task 5: Check for Prime Number
Create a function isPrime(n) that returns true if a number is prime, else false.

Example:

isPrime(7) ➝ true
isPrime(9) ➝ false */

function prime(n) {

    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;

}
console.log(prime(21));