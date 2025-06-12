/* Print numbers from 1 to N using recursion

// Example: printNumbers(5) → 1 2 3 4 5 */


/* function nthNum(n){
    if(n==0){
        return 0;
    }
    if(n>0){
        console.log(n);
        nthNum(n-1);
    }
    
}
nthNum(5); */


function nthNum(n){
    if(n==0){
        return 0;
    }
    nthNum(n-1);
    console.log(n);
}

nthNum(5);