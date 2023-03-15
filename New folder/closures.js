function test(){
    let a = 2

    function test1(){
        console.log(a)
    }
    return test1
}

let b = test()
console.log(b)
b()

// within nested functions

function greet(){
    let name="steve"
    function sayName(){
        console.log("hello "+name)
        let age = 25
        function sayAge(){
            console.log("my age is "+age)
        }
        return sayAge
    }
    return sayName
}

let c=greet()
c()
let d=c()
d()
