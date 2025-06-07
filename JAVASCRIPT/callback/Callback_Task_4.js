/*  Task 4: Delayed Greeting
Goal:
You’ll write a function called delayedGreeting(name, callback) that:

Waits for 2 seconds

Then calls a callback function with the name as its argument 

// Example:
// delayedGreeting("Vishnu", greet) → after 2s → "Hello, Vishnu!"*/


function delayedGreeting(name,callback){
    setTimeout(()=> {

        return callback(name);

    },2000);
}

function greet(name){
    console.log('Hello'+name+'!');
}

delayedGreeting('vishnu',greet);


/* setTimeout(() => {
   console.log("Hello");
}, 2000); 
// Runs after 2 seconds */