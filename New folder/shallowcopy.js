// shallow copy in js
// shallow copy is a copy of an object that contains references to the original object's properties.

let firstperson ={
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

let secondperson = {...firstperson}   // shallow copy

secondperson.name = 'Peter'
secondperson.address.city = 'Los Angeles'

console.log(firstperson)
console.log(secondperson)