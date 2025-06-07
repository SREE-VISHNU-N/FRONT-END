/*  Task 2: Check if a Number is Even or Odd
Write a function isEvenOrOdd(num) that
returns "Even" if the number is even,
and "Odd" if the number is odd.*/
let num;
function OddEven(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(OddEven(22));