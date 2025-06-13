/* Task 2: Constructor and Super
Make a parent class Person with name, and a method sayName(). 
Create a child class Student with extra property grade. 
Use super() and make a method introduce(). */


class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}`)
    }
}
class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade
    }

    introduce() {
        console.log(`I am in the grade ${this.grade}`)
    }
}

let student1 = new Student('vishnu', 10);
student1.sayName();
student1.introduce();