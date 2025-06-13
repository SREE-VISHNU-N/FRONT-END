/* Use nested try-catch
Trigger two different ReferenceErrors — one in outer, one in inner
Handle both with separate messages */

try{
    let a = 0;
    try{
        let c=b;
    }
    catch(innerError){
        console.log('Inner error is : ',innerError.message);
    }
}
catch(outerError){
    console.log('Outer error : ',outerError.message);
}