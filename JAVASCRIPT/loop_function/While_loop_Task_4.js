/* Task Description:
Set a secret number (for example, 7).

Keep asking the user to guess the number using a while loop.

If the guess is wrong, ask again.

When the guess is correct, print a congratulatory message and end the loop. */


let secret=7; guess=7,i=1;

while(i<=7){
    if(guess==7){
        console.log('Your guess is right');
        break;
    }
    else{
        console.log('Wrong')
        break;
    }
}