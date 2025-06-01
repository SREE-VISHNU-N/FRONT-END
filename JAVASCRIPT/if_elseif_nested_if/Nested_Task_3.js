/*  Task 3: Login Simulation
Simulate a login:

If the username is "admin"

Then check if the password is "12345"

If yes, print "Login successful!"

Else, "Incorrect password"

Else, "User not found" */

let username = 'admin', password = '12345';

if (username == 'admin') {
    if (password == 12345)
        console.log('Login successfull!');
    else{
        console.log('Incorrect password')
    }
}

else {
    console.log('User not found')
}