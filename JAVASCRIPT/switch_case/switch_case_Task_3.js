/* Task 3: Grade Evaluator

Input a grade character (A, B, C, D, F) and
print a message like “Excellent”, “Good”, etc. */

let grade='A';

switch(grade){
    case 'A':
        console.log('Excellent Performance');
        break;
    case 'B':
        console.log('Good Performance');
        break;
    case 'C':
        console.log('Satisfactory Performance');
        break;
    case 'D':
        console.log('Below Average Performance');
        break;
    case 'F':
        console.log('Faliure');
        break;
    default:
        console.log('Invalid grade');
}