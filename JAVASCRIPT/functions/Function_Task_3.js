/*  Task 3: Find Maximum of Three Numbers
Write a function findMax(a, b, c) that returns the largest of three numbers.

Example:
findMax(4, 9, 2) ➝ 9 */

function findMax(a,b,c){
    
    if(a>=b && a>=c){
         return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }
}

console.log(findMax(38,34,11));