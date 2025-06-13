/*  Task 1:
Create a Promise that resolves after 2 seconds and prints
"Resolved after delay". */
let testing=true;
function Example(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(testing){

            resolve('Resolved after delay');
            }
            else{
                reject('Rejected after delay')
            }

        },2000)
    })
}

function Test(){
    Example().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Ended this statement');
    })
}

Test();