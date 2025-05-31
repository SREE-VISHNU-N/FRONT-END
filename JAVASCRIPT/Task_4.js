//Triangle Type 
//For value conversion ==
//For Type conversion ===

 /* Task 2: Triangle Type
You are given 3 numbers. These are the lengths of the sides of a triangle.
Print:

"Equilateral" if all 3 are same

"Isosceles" if 2 are same

"Scalene" if all are different */


a=12;
b=12;
c=12;

if(a==b && b==c){
    console.log("Equilateral")
}
else if(a==b || b==c || c==a){
    console.log('Isosceles')
}
else{
    console.log('Scalene')
}