/* Task 5: Custom forEach Implementation
Write a function customForEach(arr, callback) that:

Works like .forEach() by calling the callback on each array item

// Example:
// customForEach(["a", "b", "c"], logItem) → logs a, b, c */


function customForEach(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }

}

function indexItem(item, index) {
    console.log('Index of ' + index + ':' + item);//this will be print output
}


customForEach(["apple", "orange", "grape"], indexItem);//don't want to use console