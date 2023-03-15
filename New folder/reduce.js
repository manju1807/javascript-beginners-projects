// reduce method in javascript 
//reduce method is used to reduce the array to a single value
//reduce method returns the single value
//reduce method does not change the original array
//reduce method takes two arguments
//first argument is the callback function
//second argument is the initial value
//syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = arr.reduce(function(total,item){
    return total+item
    }
)
console.log(sum)
//output: 55

//example 2
var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = arr.reduce(function(total,item){
    return total+item
    }
,100)
console.log(sum)
//output: 155