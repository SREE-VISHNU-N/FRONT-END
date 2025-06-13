/*  Task 5:
Create a function that returns a Promise to calculate the 
square of a number. Use async/await to get and print the result. */

function square(n){
    return new Promise((resolve,reject)=>{
        if(n>0){
            resolve (n*n);
        }
        else{
            reject('Negative word')
        }
    })
}

async function call(){
    try{
        let output=await square(-4);
        console.log(output)
    }
    catch(error){
        console.log('Invalid number');
    }
}
call();