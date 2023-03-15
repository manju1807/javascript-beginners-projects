// chain method in javascript
// chain method is used to chain the methods
// chain method returns the object
// chain method does not change the original array
// chain method takes no arguments
// syntax
// _.chain(array)

// example 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var even = arr.filter(function(item){
    return item%2==0
    }
).map(function(item){
    return item*2
    }
)
console.log(even)
//output: [ 4, 8, 12, 16, 20 ]



// example 2
var arr2 = [1,2,3,4,5,6,7,8,9,10];
var even = arr2.filter(function(item){
    return item%2==0
    }
).map(function(item){
    return item*2
    }
).reduce(function(total,item){
    return total+item
    }
)
console.log(even)
//output: 50


let transactions=[100,-20,-50,200,400,500,600]
let result=transactions.filter(function(item){
    return item>0
}).reduce(function(total,item){
    return total+item
})
console.log(result)

//output: 1800