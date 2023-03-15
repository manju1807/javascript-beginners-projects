//example for filter method in javascript
//filter method is used to filter the array elements based on the condition
//filter method returns the new array with the elements which satisfies the condition
//filter method does not change the original array

//syntax
//array.filter(function(currentValue, index, arr), thisValue)

//example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = arr.filter(function(item){
    return item%2==0
    }
)
console.log(even)

//output: [2,4,6,8,10]