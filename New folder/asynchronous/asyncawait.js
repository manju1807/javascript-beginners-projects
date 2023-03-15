function placeorder(drink){
    return new Promise (function(resolve , reject){
        if(drink==='coffee'){
            resolve("order for coffee ios received")
        }
        else{
            reject("other orderes are rejected")
        }
    })
}

function processOrder(order){
    return new Promise (function(resolve){
        console.log('order is being processed')
        resolve(`${order} is served`)
    })
}        

placeorder('coffee').then(function(orderplaced){
    console.log(orderplaced)
})

placeorder('tea').catch(function(orderplaced){
    console.log('order is not placed')
})