/*  Task 2: Reverse Elements
Create an array of 6 numbers. Print the original array, 
and then print the reversed array (without using .reverse() method). */


let numbers =[1,2,3,4,5];
console.log(numbers);

let reverse=[];
for(let i=numbers.length-1; i>=0; i--){
    reverse.push(numbers[i])
}
 console.log(reverse)