/* Task 2: Print All Elements in Reverse Order
Loop through a 2D array in reverse (from last row to first, and last column to first). */

let array=[[1,2,3],[4,5,6],[7,8,9]];

for(let i=array.length-1; i>=0; i--){
    for(let j=array[i].length-1; j>=0; j--){
        console.log(array[i][j]);
    }
}