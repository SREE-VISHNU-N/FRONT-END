/* Factorial of a number
Input: 5 → Output: 120
(e.g., 5! = 5×4×3×2×1) */


function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));