/* Task 2:
Write a function checkEven(n) that returns a Promise:
Resolve with "Even number" if even
Reject with "Odd number" if odd
Call it and handle both success and error using .then() and .catch(). */

function checkEven(n){
    return new Promise((resolve,reject)=>{
        if(n%2==0){
            resolve('Even number');
        }
        else{
            reject('Odd number');
        }
    })

}

function Test(){
    checkEven(28).then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Ended this statement')
    })
}
Test();