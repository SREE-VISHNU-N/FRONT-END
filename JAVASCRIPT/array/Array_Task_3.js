/* Task 3: Even Numbers Only
Create an array of 10 numbers. 
Use a loop to print only the even numbers. */

let inputs=[22,11,33,24,42,22,10,11,1];

let even=[];
for(let i=0; i<inputs.length; i++){
    if(inputs[i]%2==0){
        even.push(inputs[i]);
    }

}
console.log(even);