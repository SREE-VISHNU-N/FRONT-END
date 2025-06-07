

/* function OddOrEven(a){
    if(a%2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

//Return keyword - return the value from function

let OddEven = OddOrEven  //We can declar the function in another variable

console.log(OddEven(22));
 */



//single line function 

let oddEven = (a) => a%2 == 0? "Odd":"Even";
console.log(oddEven(21));