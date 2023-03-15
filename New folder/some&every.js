//some and every method in javascript 
//some method is used to check whether atleast one element in the array satisfies the condition
//some method returns true if atleast one element satisfies the condition
//some method returns false if none of the element satisfies the condition
//some method does not change the original array
//
//syntax
//array.some(function(currentValue, index, arr), thisValue)
//
//example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = arr.some(function(item){
    return item%2==0
    }
)
console.log(even)
//
//output: true

//every method is used to check whether all the elements in the array satisfies the condition
//every method returns true if all the elements satisfies the condition
//every method returns false if atleast one element does not satisfies the condition
//every method does not change the original array   
//
//syntax
//array.every(function(currentValue, index, arr), thisValue)
//
//example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = arr.every(function(item){
    return item%2==0
    }
)
console.log(even)
//
//output: false
