
/* Task 3: Password Check
Write a function that checks a password string.

If it's less than 6 letters, print "Too short"

If it has no numbers, print "Add a number"

Else, print "Strong password" */

let pass="vishnu28"
if(pass.length<6 && pass.length>0){
    console.log('Too short');
}
else if(pass.length==0){
    console.log('Add a number');
}
else{
    console.log('Strong password')
}


