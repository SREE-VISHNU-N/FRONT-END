/*  Task 3: Find the Maximum Number in an Array
What to do:
You’re given an array of numbers, for example:
[10, 25, 7, 99, 56]

Using a for loop, find the largest number in that array.
Print the maximum number at the end. */


let array=[10,25,7,99,100,56];
let big=array[0]

for(let i=0;i<=array.length;i++){

    if(array[i]>big){
        big=array[i];
    }
    
    }
    console.log(big)
