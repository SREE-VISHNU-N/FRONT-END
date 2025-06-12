/* Task 4:
Loop through a Set of strings and print each item. */

 let fruits = new Set();

 fruits.add('Apple');
 fruits.add('Banana');
 fruits.add('Mango');
 fruits.add('Grape');
 fruits.add('Orange');

for(i of fruits){
    console.log(i);
}