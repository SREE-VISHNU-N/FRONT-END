/*  Task 4: Loop through Object
Create an object:

let fruits = {
  apple: 5,
  banana: 3,
  mango: 10
};
Use a for...in loop to print:

apple: 5
banana: 3
mango: 10 */

let fruits={
    apple:5,
    banana:3,
    mango:10
}

for(i in fruits){
    console.log(i+':'+fruits[i]);
}