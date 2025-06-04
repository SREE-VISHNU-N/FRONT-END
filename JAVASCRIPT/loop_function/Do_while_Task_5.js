/*  Task 5: Reverse a Number
 Goal:
You have a number (e.g., 12345).

Use a do...while loop to reverse its digits.

Output the reversed number (54321 in this example). */

let num=123,reverse=0,copy=num;
do{
    reverse=reverse*10;
    reverse=reverse+(copy%10);
    copy=Math.floor(copy/10);
}
while(copy>0)

    console.log(reverse);