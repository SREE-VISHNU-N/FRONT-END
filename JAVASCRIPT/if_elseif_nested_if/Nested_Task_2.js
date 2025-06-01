/* Task 2: Number Classification
Create a function that takes a number and classifies it:

If the number is positive

Check if it's even or odd.

If it's zero, print "Zero".

If negative, print "Negative number". */

let number=-2;

if (number>=0){
    if(number == 0){
        console.log('Zero');
    }
    else if(number%2==0){
        console.log('Even');
    }
    else{
        console.log('odd')
    }
}
else{
    console.log('Negative number');
}