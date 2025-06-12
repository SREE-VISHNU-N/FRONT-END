/* Task 3:
Given a Map of country names as keys and their capitals as values, 
check if a specific country exists using .has(). */

let country = new Map();
country.set('India','Delhi');
country.set('Russia','Moscow');
country.set('China','Beijing');

console.log(country.has('Russia'));