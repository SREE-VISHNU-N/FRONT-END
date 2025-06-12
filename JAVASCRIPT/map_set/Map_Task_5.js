/* Create a Map of 3 countries and their currencies. 
Then convert the entire Map into an array using spread syntax or Array.from() 
and print it. */

let countries = new Map();

countries.set('India','INR');
countries.set('United States','USD');
countries.set('China','CNY');

let array = [...countries];

console.log(countries);
console.log(array);