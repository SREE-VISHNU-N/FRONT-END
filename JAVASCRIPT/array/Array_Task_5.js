/* Task 5: Merge Two Arrays
Given two arrays:

let a = [1, 2, 3];
let b = [4, 5, 6];
Merge them into a single array without using .concat().
 Print the merged result. */

/* let a = [1, 2, 3];
let b = [4, 5, 6];

for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
}
console.log(a)//with change original array */

//without changing original array

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a]
for (let i = 0; i < b.length; i++) {
    c.push(b[i]);
}
console.log(c);
console.log(a);
console.log(b);