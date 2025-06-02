/*  Task 2: Count Vowels in a String
Problem:
Given a string (e.g., "developer"), use a for loop to count how many vowels it contains.

Vowels: a, e, i, o, u

You should handle both lowercase and uppercase letters (optional but good practice).

Print the total number of vowels found. */


let word='developer',count=0,vowels='aeiou'


for(let i=0; i<=word.length; i++){
 let char=word[i];
 if(vowels.includes(char)){
    count=count+1;
 }
}
console.log(count);