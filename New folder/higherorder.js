//most propable approach ussing imperative approach
let arr = [1,2,3,4,5]
let squared=[]
for(let i=0;i<arr.length;i++){
    squared.push(arr[i]*arr[i])
}
console.log(squared)


// functional approach  using map in declarative approach
// what is map method?
// map method is used to iterate over an array and perform some operation on each element of the array
let arr2 = [1,2,3,4,5]
let squared2 = arr2.map(function(item){   
        return item*item
    }
)
console.log(squared2)

//example 2

let transactions = [100,200,300,4000,5000]
let convert2Rs = transactions.map(function(item){
    return item*82
    }
)
console.log(convert2Rs)


let transactions1 = [100,200,300,4000,5000]
let Rs = transactions.forEach(function(item){
    console.log((item*82))
    }
)
console.log(Rs)

