/*  Task 3: Nested Object Access
Create an object student:

let student = {
  name: "Aarav",
  marks: {
    math: 90,
    science: 85
  }
};
Print the science marks and add a new subject english with 92 marks. */

let student={
    name:'vishnu',
    marks:{
        math:90,
        science:85

    }
}
student.marks['english']=92;
console.log(student.marks.science);
console.log(student);