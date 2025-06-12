/*  Task 3: Sum of All Elements
Calculate the total sum of all numbers in a 2D array. */


let array=[[1,2,3],[4,5,6],[7,8,9]];
let sum=0;

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        sum=sum+array[i][j];
    }
}

console.log(sum);