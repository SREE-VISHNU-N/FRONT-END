/*  Task 3: Sum Numbers Until a Negative Number Appears
Objective:
Create an array of numbers (e.g., [10, 20, 30, -5, 15]) and use a do...while loop to keep adding them to a sum variable.

Goal:
Stop the loop when a negative number is encountered.
Print the final total sum after exiting the loop. */


let num=[2,4,8,10,20,-10,20],i=0,sum=0;

do{
    if(num[i]<0){
        break;
    }

     sum=sum+num[i]
    i++;
}
while(i<=num.length)

    console.log(sum);