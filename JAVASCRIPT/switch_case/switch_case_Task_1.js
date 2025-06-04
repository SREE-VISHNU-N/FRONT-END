/* Task 1: Weekday Checker

Write a program that takes a number (1 to 7) and 
prints the corresponding day name 
(e.g., 1 = Monday, 7 = Sunday) using a switch case. */

let day=9;

switch(day){
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Enter correct day');
 
}