// Task 5: Remove Duplicates from an Array (using only a for loop)


let arr1=[1,2,3,4,4,4,5],arr2=[];

for(let i=0; i<arr1.length; i++){
    if(!arr2.includes(arr1[i])){
        arr2.push(arr1[i]);
    }
}
console.log(arr2)