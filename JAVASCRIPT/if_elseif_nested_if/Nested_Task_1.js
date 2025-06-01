/* Task 1: Basic Age and License Check
Write a program that checks if a person is eligible to drive:

If age is 18 or more, then check if they have a license.

If both are true, print "You can drive".

Otherwise, give proper messages. */


let age=17;
let license=false;

if(age>=18){
    if(license==true){
        console.log("You can drive");
    }
    else{
        console.log("You can't drive without license");
    }
}
else{
    console.log('You are too young to drive');
}

