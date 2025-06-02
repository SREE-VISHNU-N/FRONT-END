/*  Task 3: Reverse a Number
 Description:
Ask the user (or define directly) a number like 4567, 
and use a while loop to reverse its digits. */

let num=123,rev=0,copy=num;

while(copy>0){
    rev=rev*10;
    rev=rev+(copy%10);
    copy=Math.floor(copy/10);
}
console.log(rev)