/* Print a number pattern in reverse
Input: 5 → Output: 5 4 3 2 1 */

function reverse(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    reverse(n - 1);
}
reverse(5)