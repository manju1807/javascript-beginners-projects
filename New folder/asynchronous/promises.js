// how to produce a promise

const promise = new Promise((resolve, reject) => {
    const a = 4
    const b = 5
    setTimeout(() => {
        if(a==b){
            resolve('Success')
        }
        else{
            reject('Failure')
        }
    }, 2000);
    }
);

console.log(promise)

promise.then((message) => {         //then is used to print the success results in promisses that is when resolve is called.
    console.log(message);   
})
.catch((message)=>{                 //catch is used to print the rejected results in promises that is when reject is called.
    console.log(message)
});