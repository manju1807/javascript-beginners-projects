// example for deep copy
// deep copy is a copy of an object that contains copies of the original object's properties.

let firstperson ={
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

let secondperson = JSON.parse(JSON.stringify(firstperson))   // deep copy

secondperson.name="Ram"
secondperson.address.city = 'Los Angeles'

console.log(firstperson)
console.log(secondperson)