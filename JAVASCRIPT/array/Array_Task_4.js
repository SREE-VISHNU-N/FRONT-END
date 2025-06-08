/*  Task 4: Count Occurrences
Given an array of fruits like:

["apple", "banana", "apple", "orange", "banana", "apple"]
Write code to count how many times "apple" appears. */


let fruits=['apple','banana','grape','apple','apple','orange'];
let count=0;

for(let i=0; i<fruits.length; i++){
    if(fruits[0]==fruits[i]){
        count=count+1;
    }
}
console.log('count of '+fruits[0]+' is '+count);

