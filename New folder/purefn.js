//impure function
var a=2

function impureFn(x){
    console.log(a+x)
    a++
}

impureFn(2)
impureFn(2)
impureFn(2)

//pure function

function pureFn(x){
    return a+x
}

console.log(pureFn(2))
console.log(pureFn(2))
console.log(pureFn(2))
