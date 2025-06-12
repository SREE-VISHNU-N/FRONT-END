/* Count Even Digits in a Number

Write a recursive function that returns how many even digits are in a number.

// Example: countEvenDigits(2461) → 3 (2, 4, 6) */

function even(n){
    if(n==0){
        return 0;
    }

    let lastdigit = n%10;
    let Even=(lastdigit%2==0)? 1 : 0;
    return Even+even(Math.floor(n/10));
}

console.log(even(122234));