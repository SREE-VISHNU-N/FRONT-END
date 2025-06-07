/* Task 1: Simple Math Callback
Create a function calculate(a, b, operation) where operation is a callback.
Use it to:
Add two numbers
Subtract two numbers */

function calculate(a,b,operation){
    return operation(a,b);
}
add = (a,b)=>a+b;
sub = (a,b)=>a-b;

console.log(calculate(6,4,sub));