/* Class BankAccount
Properties: accountHolder, balance
Method: deposit(amount) to increase balance
Method: getBalance() to return current balance */

class BankAccount {
    constructor(accountHolder) {
        this.accountHolder = accountHolder;
        this.balance = 1000;
    }

    deposit(amount) {
        this.balance += amount;
       
    }
    getBalance(){
            return this.balance;
    }

}
let user = new BankAccount('Vishnu');
console.log(user.getBalance());
user.deposit(500);
console.log(user.getBalance());