/*  Task 4: Reverse a String
Write a function reverseString(str) that returns the reversed version of a string.

Example:

reverseString("hello") ➝ "olleh" */

/* function reverseString(str){
    let reversed = '';
    for(let i = str.length; i>=0; i--){
        reversed=reversed+str[i];
    }
     return reversed;
}
console.log(reverseString("hello")) */


function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("hello"))