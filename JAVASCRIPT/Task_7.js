/* Task 5: Simple Login System
Write a login function with two inputs: username and password.

If username is "admin" and password is "1234" → print "Login successful"

If username is not "admin" → print "Unknown user"

If username is "admin" but password is wrong → print "Incorrect password" */


let username="admin";
let password="134";

if(username==="admin" && password==="1234"){
    console.log('Login successful');
}
else if(username!="admin"){
    console.log('Unknown user');
}
else if(username=="admin" && password!="1234"){
    console.log('Incorrect password');
}