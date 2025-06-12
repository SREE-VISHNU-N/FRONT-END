/* 
Create a class Student
Properties: name, marks
Method: isPassed() returns "Passed" if marks >= 35, otherwise "Failed" */

class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

    isPassed(){
        if(this.marks>=35 && this.marks<=100){
            return this.name+":"+'Passed';
        }
       else if(this.marks<35){
        return this.name+":"+'Failed';
       }
       else{
        return 'Please enter valid mark';
       }
    
    }
}

let student1=new Student('Vishnu',1000);
console.log(student1.isPassed());