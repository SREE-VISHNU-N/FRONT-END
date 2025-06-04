/* Task 5: Traffic Light System
Input a color (red, yellow, green) and return a message:
Red → Stop
Yellow → Get Ready
Green → Go */


let color='red';

switch(color){
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Get Ready');
        break;
    case 'green':
        console.log('Go');
        break;

    default:
        console.log('Invalid color');
}