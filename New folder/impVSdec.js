//imperative way of writing program in Javascript

let a = 4
let square=a*a

if (square%2===0){
    console.log("even")
}
else{
    console.log("odd")
}

//Declarative way of writing program in Javascript

const evenSquare = (x) => ( x*x % 2 === 0 ? true : false)  
console.log(evenSquare(5))