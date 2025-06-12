/*  Task: Recursive Sum of Digits
Write a recursive function to calculate the sum of digits of a given number.

Example:

Input: 1234
Output: 10  // (1 + 2 + 3 + 4) */

function add(n){
    if(n==0){
        return 0;
    }
    return n%10+add(Math.floor(n/10));
}

console.log(add(12345));
