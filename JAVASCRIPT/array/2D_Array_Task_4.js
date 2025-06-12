/*  Task 4: Find Max Value in 2D Array
Loop through the array and find the maximum number. */

let array=[[20,2,3],[111,22,33],[80,20,40]];
let max=0;

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        if(array[i][j]>max){
            max=array[i][j];
        }
    }
}

console.log(max);