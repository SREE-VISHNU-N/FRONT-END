/* Task 2: Simple Calculator

Ask the user for two numbers and an 
operator (+, -, *, /) and perform the operation using a switch case. */


let op='/',a=20,b=2;

switch(op){
    case '+':
        console.log('Sum is :',a+b);
        break;
    case '-':
        console.log('Difference is :',a-b);
        break;
    case '*':
        console.log('Product is :',a*b);
        break;
    case '/':
        console.log('Quotient is :',a/b);
        break;
    default:
        console.log('Enter correct operator');
}