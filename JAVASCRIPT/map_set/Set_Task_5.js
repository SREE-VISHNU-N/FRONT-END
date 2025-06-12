/* Task 5:
Convert a Set into an array using spread syntax ([...set]) or
Array.from(), then print the array. */

 let fruits = new Set();

 fruits.add('Apple');
 fruits.add('Banana');
 fruits.add('Mango');
 fruits.add('Grape');
 fruits.add('Orange');


 let array=[...fruits];
 console.log(array);