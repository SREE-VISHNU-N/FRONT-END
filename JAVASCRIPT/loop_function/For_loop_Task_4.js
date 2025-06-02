/* Task 4: Prime Number Checker
What to do:
Given a number, check if it is a prime number.

A prime number:

Is greater than 1

Has no divisors other than 1 and itself
(e.g., 2, 3, 5, 7, 11, 13 are prime) */


let num=5,isprime;

for(let i=2; i<num; i++){
    if(num%i==0){
        isprime=false;
        console.log('Not prime');
        break;
    }
    if(isprime==true){
        console.log('Prime');
        break;
    }
    
}