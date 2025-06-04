/* Simulate Password Entry Until Correct
Objective:
Simulate user input for a password. Use a loop to repeat until the password "admin" is entered.

Approach Options:

Use a pre-filled array like ["123", "pass", "admin"] as mock input.

Or use the readline module to let the user input in real time (if you're comfortable with that now).

Goal:
Once "admin" is entered, display "Access granted" and exit. */



let password=['1234','vishnu','sree','admin','HelloWorld'],i=0;


do{
    if(password[i]==='admin')
    {
        console.log('Access granted');
        break;
    }
    else{
        console.log('Access denied');
    }
    i++;
}
while(i<password.length)