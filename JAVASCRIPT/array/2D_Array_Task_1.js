/* Print All Elements Row by Row
Write code to loop through a 2D array and print each element one by one. */

let array = [[1,2,3],[4,5,6],[7,8,9]];

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        console.log(array[i][j]);
    }
}