/* Task 3:
Remove a specific element from a Set using .delete(), 
then print the Set. */

 let fruits = new Set();

 fruits.add('Apple');
 fruits.add('Banana');
 fruits.add('Mango');
 fruits.add('Grape');
 fruits.add('Orange');

 console.log(fruits.delete('Mango'));
 console.log(fruits);