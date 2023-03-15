// find method in javascript
// find method is used to find the first element in the array which satisfies the condition
// find method returns the first element which satisfies the condition
// find method does not change the original array
//
//syntax
//array.find(function(currentValue, index, arr), thisValue)
//
//example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = arr.find(function(item){
    return item%2==0
    }
)
console.log(even)

//output: 2