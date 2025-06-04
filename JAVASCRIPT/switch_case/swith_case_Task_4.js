/* Task 4: Month Days Checker

Input a month number (1–12) and return how many days
are in that month using a switch case. 
For simplicity, assume February has 28 days.
 */


let month=1;

switch(month){
    case 1:
        console.log('January has 31 days');
        break;
    case 2:
        console.log('February has 28 or 29 days');
        break;
    case 3:
        console.log('March has 31 days');
        break;
    case 4:
        console.log('April has 30 days');
        break;
    case 5:
        console.log('May has 31 days');
        break;
    case 6:
        console.log('June has 30 days');
        break;
    case 7:
        console.log('July has 31 days');
        break;
    case 8:
        console.log('August has 31 days');
        break;
    case 9:
        console.log('September has 30 days');
        break;
    case 10:
        console.log('October has 31 days');
        break;
    case 11:
        console.log('November has 30 days');
        break;
    case 12:
        console.log('December has 31 days');
        break;
    default:
        console.log('Invalid month');
}