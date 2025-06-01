/* Task 4 Recap:
If the user is logged in

If the cart total is more than 1000

Apply a 10% discount

Else

Apply a 5% discount

If not logged in, no discount

Print the final payable amount */
 

let LoggedIn=true,cart=1000,discount,FinalAmount;

if(LoggedIn==true){
    if(cart>=1000){
    discount=0.1*cart;
    FinalAmount=cart-discount;
    
}else{
    discount=0.05*cart;
    FinalAmount=cart-discount;
}
console.log('Final payable amount :',FinalAmount)
}
else{
    console.log('Final payable amount :',cart)
}

