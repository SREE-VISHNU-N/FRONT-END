/* Task 1: FizzBuzz from 1 to 50
Print numbers from 1 to 50.

If a number is divisible by 3, print "Fizz" instead.

If divisible by 5, print "Buzz".

If divisible by both, print "FizzBuzz". */

for(let i=1; i<=50;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
        }

    else if(i%5==0){
        console.log('Buzz');
    }
    else if(i%3==0){
        console.log('Fizz');
    }
    else{
        console.log(i)
    }

}