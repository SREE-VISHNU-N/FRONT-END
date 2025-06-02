/* Task 2: Sum of Digits
Description:
Ask the user to input a number. Use a while loop to calculate the sum of its digits.
Example: Input = 4 → Output: 1 + 2 + 3 + 4 = 10 */

let i=1;num=4;sum=0;
while(i<=num){
    sum=sum+i;
    i++;
}
console.log(sum);