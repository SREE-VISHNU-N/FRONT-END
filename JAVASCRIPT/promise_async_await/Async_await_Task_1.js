/* Task 4:
Use async and await to wait for a Promise that resolves 
after 1 second and returns "Data Loaded". */

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

        },1000)
    })
}

async function Test(){
    try{
        let output = await Example();
        console.log(output);
    }

    catch(error){
        console.log('Rejected after delay from catch')
    }
    
    
}

Test();

