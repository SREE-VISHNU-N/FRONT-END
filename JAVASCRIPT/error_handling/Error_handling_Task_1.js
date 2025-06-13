/* Write a try-catch block that adds a variable name with 5. 
But don’t define name before. Print the error message using catch.

Hint: it will be something like let value = name + 5; */

/* try{
    let value=name+5;
}
catch(error){
    console.log(error.message)
} */

/* Use try-catch to access the length of a variable city, but don’t define city.
In the catch block, print:
"Something went wrong: " followed by the error message. */


try{
   let length= city.length;
}
catch(error){
    console.log('Something went wrong : ',error.message)
}