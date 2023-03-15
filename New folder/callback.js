// example for callback function
function callbackFunction() {
    console.log("Callback function called");
}

// example for main function
function mainFunction(callback) {
    callback();
}


// call main function
mainFunction(callbackFunction);

// Output: Callback function called     


const isEven = (n) =>{
    return n % 2 ==0
}
let result = (evenfun,num) => {
    const isNumEven = evenfun(num)
    console.log(`the number ${num} is an Even Number ${isNumEven}`)
}
result(isEven, 10)

// Output: the number 10 is an Even Number true