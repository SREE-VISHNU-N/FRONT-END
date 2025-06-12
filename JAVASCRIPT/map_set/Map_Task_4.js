/*  Task 4 (Update Task):
Create a Map of 3 students and their marks. 
Then, update one student’s mark using .set(). */

let students = new Map();

students.set('Sree',80);
students.set('Vishnu',85);
students.set('Vishvan',90);

console.log(students.get('Vishnu'));

students.set('Vishnu',95);

console.log(students.get('Vishnu'));