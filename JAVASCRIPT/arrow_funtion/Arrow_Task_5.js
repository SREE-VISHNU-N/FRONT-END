/* Task 5: Filter Words by Length
Use an arrow function with .filter() to return 
only the words that have more than 4 letters.

Example: ["cat", "parrot", "tiger", "dog"] → ["parrot", "tiger"] */


let animals=['cat','parrot','tiger','dog']
let morewords=animals.filter(item=>item.length>4)
console.log(morewords)