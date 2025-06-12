/*  Task 5: Print the Main Diagonal of a 2D Array
If you have a square matrix like:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
The main diagonal elements are the ones where the row index and column index are the same:

matrix[0][0] → 1
matrix[1][1] → 5
matrix[2][2] → 9 */

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        if(i==j){
            console.log(matrix[i][j]);
        }
    }
}
