/* Task 2: Conditional Callback Execution
Write a function checkNumber(num, callbackEven, callbackOdd) that:

Calls callbackEven() if the number is even

Calls callbackOdd() if the number is odd
Example:
// checkNumber(4, sayEven, sayOdd) → "It's Even"
// checkNumber(5, sayEven, sayOdd) → "It's Odd" */



function checkNumber(num, callbackEven, callbackOdd){
    if(num%2==0){
        return callbackEven(num);
    }
    if(num%2!=0){
        return callbackOdd(num);
    }
}
 function callEven(num){
    return "It's Even";
 }

function callOdd(num){
    return "It's odd";
}


console.log(checkNumber(72,callEven,callOdd));

