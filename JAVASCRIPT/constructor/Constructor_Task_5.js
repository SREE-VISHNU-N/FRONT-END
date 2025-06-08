/* Task 5: Constructor with Condition Logic
Create a constructor called Account

Accept ownerName and balance.

Add a method isLowBalance() that checks if balance < 1000.

If balance is less than 1000, isLowBalance() should say “yes, balance is low” (return true). 
Otherwise, it says “no, balance is okay” (return false). */

function Account(ownerName,balance){
    this.ownerName=ownerName;
    this.balance=balance;
    this.isLowBalance=function(){
       return (this.balance<1000)?"yes,balance is low":"no,balance is okay"
    };
}

let user=new Account('vishnu',100);
console.log(user.isLowBalance());