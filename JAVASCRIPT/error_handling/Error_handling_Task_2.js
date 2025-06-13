// Access an undefined variable inside try block and catch the error

try{
    let a=b
}
catch(error){
    console.log('The error is ',error.message);
}