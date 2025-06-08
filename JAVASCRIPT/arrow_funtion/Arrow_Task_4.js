/*  Task 4: Square of Each Number in Array
Use an arrow function with .map() to return a 
new array with the square of each number.

💡 Example: [1, 2, 3] → [1, 4, 9] */

let arr=[1,2,3];
newarr=arr.map(item=>{
    return item*2
})

console.log(newarr)