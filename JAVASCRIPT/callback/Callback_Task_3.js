/* Task 3: Array Filter with Callback
Write a function customFilter(arr, callback) that:
Accepts an array and a callback
Returns a new array with items that pass the test from the callback

// Example:
// customFilter([1,2,3,4,5], isEven) → [2, 4] */


function customFilter(arr, callback){

    return callback(arr);

}
function isEven(arr){
    let result=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
          result.push(arr[i])
        }
    }
   return result
}

console.log(customFilter([12,22,11,11,24],isEven));