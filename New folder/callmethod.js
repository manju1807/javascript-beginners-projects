let person1={
    fname:'steve',
    lname:'rogers',
    age:102,
    sayName:function(){
        console.log(`Hello this is ${this.fname} ${this.lname} and I am ${this.age} years old`);
    }
}

let person2={
    fname:'tony',
    lname:'stark',
    age:45,
    sayName:function(){
        console.log(`Hello this is ${this.fname} ${this.lname} and I am ${this.age} years old`);
    }
}

person1.sayName();
person2.sayName();

/// too reduce redundacy we use call function

let car1={
    name:'BMW',
    color:'red',
    sayCar:function(){
        console.log(`Hello this is ${this.name} and color is ${this.color}`);
    }
}

let car2={
    name:'Audi',
    color:'black',
}

car1.sayCar();
car1.sayCar.call(car2);