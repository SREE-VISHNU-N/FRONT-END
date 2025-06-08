/* Task 2: Constructor with Method
Create a constructor called User

Accept username and email.

Add a method called login() that logs "username has logged in". */

function User(username,email){
    this.username=username;
    this.email=email;
    this.login=function(){
        console.log(this.username+' has logged in')
    }
    }

let u1=new User('vishnu123','vishnu.2@gmail.co');
u1.login()

