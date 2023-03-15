function person(_name,_age){
    this.name = _name;
    this.age = _age;
    this.sayName = function(){
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
    this.sayName()
}

let person1 = new person('adam',25)
let person2 = new person('steve',30)

console.log(person1)
console.log(person2)


// using prototype

function car(_brand,_color){
    this.brand = _brand;
    this.color = _color;
}

car.prototype.sayBrand = function(){
    console.log(`I am driving ${this.brand} and my car color is ${this.color}`);
}

let car1 = new car('BMW','red')
let car2 = new car('Audi','black')

console.log(car1)
console.log(car2)