/*  Task 2: Simulate User Input Until "stop"
Objective:
Simulate user inputs (you can store them in an array like ["apple", "orange", "stop", "banana"]) and use a do...while loop to iterate over them.

Goal:
Keep processing the values until you encounter the word "stop".

Hint:

Use an index variable to loop through the array.

Exit when the current item is "stop". */


let array=['apple','banana','orange','stop','Grape'],i=0;

do{
    
    console.log(array[i]);
    i++;
    if(array[i]=='stop'){
        break;
    }
}
while(i<array.length)