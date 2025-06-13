/* Task 3:
Simulate a simple login system:
Promise should resolve if username is "admin" and password is "1234"
Reject otherwise
Use .then() and .catch() to print the result */

function login(username,password){
    return new Promise((resolve,reject)=>{
        if(username==="admin" && password==="1234"){
            resolve('Login Successfully!');
        }
        else{
            reject('Invalid credentials');
        }
    })
}

function Test(){
    login('admin','1234').then((message)=>{
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