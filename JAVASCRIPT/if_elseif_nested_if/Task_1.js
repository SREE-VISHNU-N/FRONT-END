//For find lead year
/* let year = 2000;
if (year % 4 == 0) {
    console.log('Leap year');
    if (year % 100 == 0) {
        console.log('Not a leap year');
        if (year % 400 == 0) {
            console.log('Leap year');
        }
        else {
            console.log('Not a leap year')
        }
    }
    else {
        console.log('Leap year')
    }
}
else {
    console.log('Not a leap');
} */


/* Task 1: Leap Year
Write a function that checks if a year is a leap year.

Example:

Input: 2024 → Output: Leap year

Input: 2023 → Output: Not a leap year */

let year = 2023;
if (year%400 == 0){
    console.log('leap year')
}
else if (year%100 == 0){
    console.log('Not a leap year')
}
else if (year%4 == 0){
    console.log('Leap year')
}
else{
    console.log('Not a leap year')
}
