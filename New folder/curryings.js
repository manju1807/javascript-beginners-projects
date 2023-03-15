// currying in javascript
// currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument

// example 1

let sum= function (a,b){
    console.log(a+b)
}
sum(2,3)

// example 2 using currying

let sum1= function (x){
 return function(y){
        console.log(x+y)
 }
}
let add=sum1(2)
add(3)

