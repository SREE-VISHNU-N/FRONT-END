/* Sum of first N natural numbers
Input: 4 → Output: 10
(e.g., 1+2+3+4) */


function sum(n){
    if(n==0){
        return 0;
    }
    return n+sum(n-1);
}
console.log(sum(4));