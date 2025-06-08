/*  Task 5: Function inside Object (Method)
Create an object calculator with two numbers:

let calculator = {
  num1: 10,
  num2: 5,
  add: function() {
    // your code
  }
};
Add a method add that returns the sum of num1 and num2.
Call the method and print the result. */


let calculator ={
    num1:10,
    num2:5,
    add : function(){
        let sum=this.num1+this.num2;
        return sum;

    }
    }

console.log(calculator.add());

