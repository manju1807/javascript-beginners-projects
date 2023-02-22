
/*                     Module:1 
                  Lesson:1 variables 
*/
var petDog="rex";
var petCat="pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ",petDog);
console.log("My pet cat's name is: ",petCat);
var catSound="purr";
var dogSound="woof";
console.log(petDog,"says",dogSound);
console.log(petCat,"says",catSound);
catSound="meow";
console.log(petCat,"says",catSound);

                
                /*  Declaring variables */

var petDog = 'Rex';
var petCat = 'Pepper';
var petDog = 'Rex'; // Task 1 solution
console.log(petDog);//consoling output
var petCat = 'Pepper'; // Task 2 solution
console.log(petCat);

var petDog = 'Rex'; // Task 1 solution
console.log("My pet dog's name is: " + petDog);

var petCat = 'Pepper'; // Task 2 solution
console.log("My pet cat's name is: " + petCat);

var catSound = "purr";
var dogSound = "woof";

var petDog = 'Rex'; // Task 1 solution
var dogSound = "woof"; // Task 8 solution
console.log(petDog, "says", dogSound);

var petCat = 'Pepper'; // Task 2 solution
var catSound = "purr"; // Task 7 solution
console.log(petCat, "says", catSound);

var catSound = "purr"; // Task 7 solution
catSound = "meow";

var petCat = 'Pepper'; // Task 2 solution
var catSound = "meow"; // Task 11 solution
console.log(petCat, "now says", catSound);

    
    
                //  Lesson:2 Datatypes  
/*
1.boolean datatype : can take only two values true or false,
2.Null datatype: having value null,
3.undefined datatype: having value undefined,
4.number datatype: having value in number format, consists of BIGINT datatype in ES6
5.string datatype: having value in string format,
6.symbol datatype: having value in symbol format,
7.object datatype: having value in object format,
*/


// Examples:

var isRaining = true;
var isSunny = false;
console.log(isRaining);
console.log(isSunny);
var isRaining = true; // Task 1 solution
console.log(isRaining);
var isSunny = false; // Task 2 solution
console.log(isSunny);
var isRaining = true; // Task 1 solution
console.log("Is it raining? " + isRaining);
var isSunny = false; // Task 2 solution
console.log("Is it sunny? " + isSunny);
var isRaining = true; // Task 1 solution
var isSunny = false; // Task 2 solution
console.log("Is it raining? " + isRaining);
console.log("Is it sunny? " + isSunny);
var isRaining = true; // Task 1 solution
var isSunny = false; // Task 2 solution
console.log("Is it raining? " + isRaining);
console.log("Is it sunny? " + isSunny);
var isRaining = true; // Task 1 solution

var a=null;
var b;
var c=10;
var d='$';
var e=a;
console.log(a); // sol: null
console.log(b); // sol: undefined
console.log(c); // sol: 10
console.log(d); // sol: $
console.log(e); // sol: null
   

                //  Lesson:3 Operators 

/*
1.Arithmetic operators: +,-,*,/,%,++,--,
2.Assignment operators: =,+=,-=,*=,/=,%=,
3.Comparison operators: ==,===,!=,!==,>,<,>=,<=,
4.Logical operators: &&,||,!,
5.Bitwise operators: &,|,^,~,<<,>>,>>>,
6.String operators: +,
7.Conditional operators: ?,
8.Comma operator: ,
9.Unary operators: typeof,delete,instanceof,new,void,
10.Relational operators: in,of,
*/

// Examples:
var a=10+15
console.log(a); // sol: 25
var b=10-15
console.log(b); // sol: -5
var c=10*15
console.log(c); // sol: 150
var d=10/15
console.log(d); // sol: 0.6666666666666666
var e=10%15
console.log(e); // sol: 10
var f=10
console.log(f++); // sol: 10
var g=10
console.log(++g); // sol: 11
var h=10
console.log(h--); // sol: 10
var i=10
console.log(--i); // sol: 9

// Assignment operators

var j=10
console.log(j+=10); // sol: 20
var k=10
console.log(k-=10); // sol: 0
var l=10
console.log(l*=10); // sol: 100
var m=10
console.log(m/=10); // sol: 1
var n=10
console.log(n%=10); // sol: 0
var o=10

// Comparison operators 

console.log(o==10); // sol: true
var p=10
console.log(p===10); // sol: true
var q=10
console.log(q!=10); // sol: false
var r=10
console.log(r!==10); // sol: false
var s=10
console.log(s>10); // sol: false
var t=10
console.log(t<10); // sol: false
var u=10
console.log(u>=10); // sol: true
var v=10
console.log(v<=10); // sol: true

// Logical operators

var w=10
console.log(w>10 && w<10); // sol: false
var x=10
console.log(x>10 || x<10); // sol: true
var y=10
console.log(!y); // sol: false

// Bitwise operators

var z=10
console.log(z&10); // sol: 10
var a1=10
console.log(a1|10); // sol: 10
var b1=10
console.log(b1^10); // sol: 0
var c1=10
console.log(~c1); // sol: -11
var d1=10
console.log(d1<<10); // sol: 10240
var e1=10
console.log(e1>>10); // sol: 0
var f1=10
console.log(f1>>>10); // sol: 0

// String operators

var g1="Hello"
var h1="World"
console.log(g1+h1); // sol: HelloWorld

// Conditional operators

var i1=10
var j1=20
console.log(i1>j1?"i1 is greater":"j1 is greater"); // sol: j1 is greater

// Comma operator

var k1=10
var l1=20
console.log(k1,l1); // sol: 10 20

// Unary operators

var m1=10
console.log(typeof m1); // sol: number
var n1=10
console.log(delete n1); // sol: true
var o1=10
console.log(o1 instanceof Number); // sol: false
var p1=10
console.log(new Number(p1)); // sol: Number {10}
var q1=10
console.log(void q1); // sol: undefined

// Relational operators

var r1=10
console.log(r1 in [10,20,30]); // sol: true
var s1=10
console.log(s1 of [10,20,30]); // sol: true

                //  Lesson:4 Conditional Statements

/*
1.if statement: if(condition){statement},
2.if else statement: if(condition){statement}else{statement},
3.if else if statement: if(condition){statement}else if(condition){statement}else{statement},
4.switch statement: switch(expression){case value:statement;break;default:statement;break;},
*/

// Examples:

var a=10
if(a>10){
    console.log("a is greater than 10");
}else{
    console.log("a is less than 10");
} // sol: a is less than 10

var b=10
if(b>10){
    console.log("b is greater than 10");
}else if(b<10){
    console.log("b is less than 10");
}else{
    console.log("b is equal to 10");
} // sol: b is equal to 10

var c=10
switch(c){
    case 10:
        console.log("c is equal to 10");
        break;
    case 20:
        console.log("c is equal to 20");
        break;
    default:
        console.log("c is not equal to 10 or 20");
        break;
} // sol: c is equal to 10


                //  Lesson:5 Loops

/*
1.for loop: for(initialization;condition;increment/decrement){statement},
2.while loop: while(condition){statement},
3.do while loop: do{statement}while(condition),
4.for in loop: for(variable in object){statement},
5.for of loop: for(variable of object){statement},
*/

// Examples:

// for loop

for(var i=0;i<10;i++){
    console.log(i);
} // sol: 0 1 2 3 4 5 6 7 8 9

// while loop

var j=0
while(j<10){
    console.log(j);
    j++;
} // sol: 0 1 2 3 4 5 6 7 8 9

// do while loop

var k=0
do{
    console.log(k);
    k++;
}
while(k<10); // sol: 0 1 2 3 4 5 6 7 8 9

// for in loop

var l={name:"John",age:20}
for(var m in l){
    console.log(m);
} // sol: name age

// for of loop

var n=[10,20,30]
for(var o of n){
    console.log(o);
} // sol: 10 20 30



                //  Lesson:6 Functions

/*
1.function declaration: function functionName(parameter){statement},
2.function expression: var functionName=function(parameter){statement},
3.arrow function: var functionName=(parameter)=>{statement},
4.self invoking function: (function(parameter){statement})(parameter),
*/

// Examples:

// function declaration

function add(a,b){
    return a+b;
}
console.log(add(10,20)); // sol: 30

// function expression

var sub=function(a,b){
    return a-b;
}
console.log(sub(20,10)); // sol: 10

// arrow function

var mul=(a,b)=>{
    return a*b;
}
console.log(mul(10,20)); // sol: 200

// self invoking function

(function(a,b){
    console.log(a+b);
}
)(10,20); // sol: 30

                


                    //  Lesson:7 Arrays

/*
1.array declaration: var arrayName=[element1,element2,element3],
2.array methods: push(),pop(),shift(),unshift(),splice(),slice(),indexOf(),lastIndexOf(),join(),concat(),reverse(),sort(),forEach(),map(),filter(),reduce(),reduceRight(),every(),some(),find(),findIndex(),includes(),flat(),flatMap(),copyWithin(),fill(),entries(),keys(),values(),from(),of(),isArray(),toString(),toLocaleString(),toSource(),length,prototype,constructor,
*/

// Examples:

// array declaration

var a=[10,20,30]

// array methods

var b=[10,20,30]
b.push(40)
console.log(b); // sol: [10,20,30,40]
var c=[10,20,30]
c.pop()
console.log(c); // sol: [10,20]
var d=[10,20,30]
d.shift()
console.log(d); // sol: [20,30] 
var e=[10,20,30]
e.unshift(40)
console.log(e); // sol: [40,10,20,30]
var f=[10,20,30]
f.splice(1,0,40)
console.log(f); // sol: [10,40,20,30]
var g=[10,20,30]
g.splice(1,1,40)
console.log(g); // sol: [10,40,30]
var h=[10,20,30]
console.log(h.slice(1,2)); // sol: [20]
var i=[10,20,30]
console.log(i.indexOf(20)); // sol: 1
var j=[10,20,30]
console.log(j.lastIndexOf(20)); // sol: 1
var k=[10,20,30]
console.log(k.join("-")); // sol: 10-20-30
var l=[10,20,30]
var m=[40,50,60]    
console.log(l.concat(m)); // sol: [10,20,30,40,50,60]
var n=[10,20,30]
console.log(n.reverse()); // sol: [30,20,10]
var o=[10,20,30]
console.log(o.sort()); // sol: [10,20,30]
var p=[10,20,30]


p.forEach((value,index)=>{
    console.log(value);
    console.log(index);
}
) // sol: 10 0 20 1 30 2


var q=[10,20,30]
var r=q.map((value,index)=>{
    return value*2;
}
)
console.log(r); // sol: [20,40,60]

var s=[10,20,30]
var t=s.filter((value,index)=>{
    return value>15;
}
)
console.log(t); // sol: [20,30]

var u=[10,20,30]
var v=u.reduce((total,value,index)=>{
    return total+value;
}
)
console.log(v); // sol: 60

var w=[10,20,30]
var x=w.reduceRight((total,value,index)=>{
    return total+value;
}
)
console.log(x); // sol: 60

var y=[10,20,30]
var z=y.every((value,index)=>{
    return value>15;
}
)
console.log(z); // sol: false

var a1=[10,20,30]
var a2=a1.some((value,index)=>{
    return value>15;
}
)   
console.log(a2); // sol: true

var b1=[10,20,30]
var b2=b1.find((value,index)=>{
    return value>15;
}
)
console.log(b2); // sol: 20


var c1=[10,20,30]
var c2=c1.findIndex((value,index)=>{
    return value>15;
}
)
console.log(c2); // sol: 1

var d1=[10,20,30]
console.log(d1.includes(20)); // sol: true

var e1=[10,20,30]
console.log(e1.flat()); // sol: [10,20,30]

var f1=[10,20,30]
var f2=f1.flatMap((value,index)=>{
    return value*2;
}
)
console.log(f2); // sol: [20,40,60]

var g1=[10,20,30]
g1.copyWithin(1,0)
console.log(g1); // sol: [10,10,20]


var h1=[10,20,30]
h1.fill(40)
console.log(h1); // sol: [40,40,40]

var i1=[10,20,30]
console.log(i1.entries()); // sol: [Array Iterator] { 0: [ 0, 10 ], 1: [ 1, 20 ], 2: [ 2, 30 ] }

var j1=[10,20,30]
console.log(j1.keys()); // sol: [Array Iterator] { 0, 1, 2 }

var k1=[10,20,30]
console.log(k1.values()); // sol: [Array Iterator] { 10, 20, 30 }

var l1=[10,20,30]
console.log(Array.from(l1)); // sol: [10,20,30]

var m1=[10,20,30]
console.log(Array.of(m1)); // sol: [ [ 10, 20, 30 ] ]

var n1=[10,20,30]
console.log(Array.isArray(n1)); // sol: true

var o1=[10,20,30]
console.log(o1.toString()); // sol: 10,20,30

var p1=[10,20,30]
console.log(p1.toLocaleString()); // sol: 10,20,30

var q1=[10,20,30]
console.log(q1.toSource()); // sol: [10,20,30]

var r1=[10,20,30]
console.log(r1.length); // sol: 3

var s1=[10,20,30]
console.log(s1[0]); // sol: 10

var t1=[10,20,30]
t1[0]=40
console.log(t1); // sol: [40,20,30]

var u1=[10,20,30]
console.log(u1[Symbol.iterator]); // sol: [Function: values]

var v1=[10,20,30]
console.log(v1[Symbol.unscopables]); // sol: { copyWithin: true, entries: true, fill: true, find: true, findIndex: true, flat: true, flatMap: true, includes: true, keys: true, values: true }

var w1=[10,20,30]

w1[Symbol.iterator]=function(){
    let index=0;
    return {
        next:()=>{
            return {
                value:this[index],
                done:index++==this.length
            }
        }
    }
}

for(let value of w1){
    console.log(value);
} // sol: 10 20 30
/* 
JavaScript improvements

In this reading, you will learn about the history of JavaScript and the importance of ECMA (European Computer Manufacturers Association) and ECMAScript.  

JavaScript is a programming language that had humble beginnings.

It was built in only 10 days in 1995 by a single person, Brendan Eich, who was tasked with building a simple scripting language to be used in version 2 of the Netscape browser. It was initially called LiveScript, but since the Java language was so popular at the time, the name was changed to JavaScript - although Java and JavaScript are in no way related.

For the first few years, after it was built, JavaScript was a simple scripting language to add mouseover effects and other interactivity. Those effects were being added to webpages using the <script> HTML element.

Inside each of the script elements, there could be some JavaScript code. Due to the rule that HTML, CSS, and JavaScript must be backward compatible, even the most advanced code written in JavaScript today ends up being written between those script tags.

Over the years, JavaScript grew ever more powerful, and in recent times, it's continually touted as among the top three commonly used languages.

In 1996 Netscape made a deal with the organization known as ECMA (European Computer Manufacturers Association) to draft the specification of the JavaScript language, and in 1997 the first edition of the ECMAScript specification was published.

ECMA publishes this specification as the ECMA-262 standard.

You can think of a standard as an agreed-upon way of how things should work. Thus, ECMA-262 is a standard that specifies how the JavaScript language should work.

There have been 12 ECMA-262 updates - the first one was in 1997.

JavaScript as a language is not a completely separate, stand-alone entity. It only exists as an implementation. This implementation is known as a JavaScript engine.

Traditionally, the only environment in which it was possible to run a JavaScript engine, was the browser. More specifically, a JavaScript engine was just another building block of the browser. It was there to help a browser accomplish its users' goal of utilizing the internet for work, research, and play.

So, when developers write JavaScript code, they are using it to interact with a JavaScript engine. Put differently, developers write JavaScript code so that they can "talk to" a JavaScript engine.

Additionally, the JavaScript engine itself comes with different ways to interact with various other parts of the browser. These are known as Browser APIs.

Thus, the code that you write in the JavaScript programming language allows you to: 1. Interact with the JavaScript engine inside of the browser 2. Interact with other browser functionality that exists outside of the JavaScript engine, but is still inside the browser.

Although traditionally it was possible to interact with the JavaScript engine only inside of the browser, this all changed in 2009, when Node.js was built by Ryan Dahl.

He came up with a way to use a JavaScript engine as a stand-alone entity. Suddenly, it was possible to use JavaScript outside of the browser, as a separate program on the command line, or as a server-side environment.

Today, JavaScript is ubiquitous and is running in browsers, on servers, actually, on any device that can run a JavaScript engine. */

        

                //lesson:8  objects 
/*
JavaScript Object 

Object literals and the dot notation
One of the most common ways of building an object in JavaScript is using the object literal syntax: {}

examples:

var user = {}; // creates an javascript object.

Now an object literal is assigned to the variable user, which means that the object it is bound to can be extended and manipulated in a myriad of ways.
Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties, delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lesson.
Here's one such previously built object:

//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

//accessing the properties of the object
console.log(assistantManager.socialSkills); // sol: 30
console.log(assistantManager.greeting); // sol: Let's make some money

//changing the value of the properties of the object

assistantManager.socialSkills = 40;
assistantManager.greeting = "Let's make some money and have fun";

console.log(assistantManager.socialSkills); // sol: 40
console.log(assistantManager.greeting); // sol: Let's make some money and have fun

//adding new properties to the object

assistantManager.age = 25;
assistantManager.name = "John";

console.log(assistantManager.age); // sol: 25
console.log(assistantManager.name); // sol: John

//deleting the properties of the object

delete assistantManager.socialSkills;
delete assistantManager.streetSmarts;

console.log(assistantManager.socialSkills); // sol: undefined
console.log(assistantManager.streetSmarts); // sol: undefined

//accessing the properties of the object using the dot notation

console.log(assistantManager.socialSkills); // sol: 40
console.log(assistantManager.greeting); // sol: Let's make some money and have fun

//accessing the properties of the object using the bracket notation

console.log(assistantManager["socialSkills"]); // sol: 40
console.log(assistantManager["greeting"]); // sol: Let's make some money and have fun

//accessing the properties of the object using the bracket notation and the variable

var property = "socialSkills";
console.log(assistantManager[property]); // sol: 40

//accessing the properties of the object using the bracket notation and the variable

var property = "greeting";
console.log(assistantManager[property]); // sol: Let's make some money and have fun

//accessing the properties of the object using the bracket notation and the variable

var property = "age";

console.log(assistantManager[property]); // sol: 25

//accessing the properties of the object using the bracket notation and the variable

var property = "name";

console.log(assistantManager[property]); // sol: John
*/


                //lesson:9  maths object
/*
Math object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

By the end of this reading, you'll be able to:

    Outline the built-in properties and methods of the Math object

Number constants

Here are some of the built-in number constants that exist on the Math object: 

    The PI number: Math.PI which is approximately 3.14159
    The Euler's constant: Math.E which is approximately 2.718
    The natural logarithm of 2: Math.LN2 which is approximately 0.693

Rounding methods

These include: 

     Math.ceil() - rounds up to the closest integer 
     Math.floor() - rounds down to the closest integer 
     Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
     Math.trunc() - trims the decimal, leaving only the integer

Arithmetic and calculus methods

Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

    Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
    Math.sqrt(16) - calculates the square root of 16, the result is 4 
    Math.cbrt(8) - finds the cube root of 8, the result is 2 
    Math.abs(-10) - returns the absolute value, the result is 10 
    Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
    Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
     Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
*/

                //lesson:10  string object

/*
String object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the String object.

By the end of this reading, you'll be able to:

Outline the built-in properties and methods of the String object
String properties

Here are some of the built-in string properties that exist on the String object:

    String.length - returns the length of the string
    String.prototype - returns the prototype of the string object

String methods

Here are some of the built-in string methods that exist on the String object:

    String.fromCharCode() - returns a string created by using the specified sequence of Unicode values
    String.fromCodePoint() - returns a string created by using the specified sequence of code points
    String.prototype.charAt() - returns the specified character from a string
    String.prototype.charCodeAt() - returns the Unicode of the character at the specified index in a string
    String.prototype.concat() - joins two or more strings, and returns a new joined strings
    String.prototype.includes() - determines whether one string may be found within another string, returning true or false as appropriate
    String.prototype.indexOf() - returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found
    String.prototype.lastIndexOf() - returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found
    String.prototype.repeat() - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
    String.prototype.replace() - returns a new string with some or all matches of a pattern replaced by a replacement
    String.prototype.search() - executes the search for a match between a regular expression and this String object
    String.prototype.slice() - extracts a section of a string and returns it as a new string, without modifying the original string
    String.prototype.split() - splits a String object into an array of strings by separating the string into substrings
    String.prototype.substring() - returns the part of the string between the start and end indexes, or to the end of the string
    String.prototype.toLowerCase() - returns the calling string value converted to lower case
    String.prototype.toUpperCase() - returns the calling string value converted to upper case
    String.prototype.trim() - removes whitespace from both ends of a string
    String.prototype.valueOf() - returns the primitive value of a String object
*/

                //lesson:11  Error Handling

/*
Error handling cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Error object.

By the end of this reading, you'll be able to:

    Outline the built-in properties and methods of the Error object
    Use the Error object to handle errors

Error object

The Error object is a built-in object that provides error information when an error occurs.

Here are some of the built-in properties and methods that exist on the Error object:

    Error.name - returns the name of the error
    Error.message - returns the error message
    Error.stack - returns the stack trace of the error
    Error.prototype.toString() - returns a string representing the specified object

Error handling

Error handling is a process that deals with errors in a manageable and predictable manner.

Here are some of the common error handling techniques:

    Try...catch...finally - the try statement lets you test a block of code for errors. The catch statement lets you handle the error. The finally statement lets you execute code, after try and catch, regardless of the result.
    Throw - the throw statement allows you to create custom errors.
    Try...catch - the try statement lets you test a block of code for errors. The catch statement lets you handle the error.
    Try...finally - the try statement lets you test a block of code for errors. The finally statement lets you execute code, after try, regardless of the result.
*/

                //lesson:12  Date object

/*
Date object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Date object.

By the end of this reading, you'll be able to:

    Outline the built-in properties and methods of the Date object
    Use the Date object to work with dates and times

Date object

The Date object is a built-in object that provides methods for working with dates and times.

Here are some of the built-in properties and methods that exist on the Date object:

    Date.now() - returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
    Date.parse() - parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
    Date.UTC() - accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00 UTC
    Date.prototype.getDate() - returns the day of the month for the specified date according to local time
    Date.prototype.getDay() - returns the day of the week for the specified date according to local time, where 0 represents Sunday
    Date.prototype.getFullYear() - returns the year of the specified date according to local time
    Date.prototype.getHours() - returns the hour for the specified date, according to local time
    Date.prototype.getMilliseconds() - returns the milliseconds in the specified date according to local time
    Date.prototype.getMinutes() - returns the minutes in the specified date according to local time
    Date.prototype.getMonth() - returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year)
    Date.prototype.getSeconds() - returns the seconds in the specified date according to local time
    Date.prototype.getTime() - returns the numeric value corresponding to the time for the specified date according to universal time
    Date.prototype.getTimezoneOffset() - returns the time-zone offset from UTC, in minutes, for the current locale
    Date.prototype.getUTCDate() - returns the day (date) of the month in the specified date according to universal time
    Date.prototype.getUTCDay() - returns the day of the week in the specified date according to universal time, where 0 represents Sunday
    Date.prototype.getUTCFullYear() - returns the year in the specified date according to universal time
    Date.prototype.getUTCHours() - returns the hours in the specified date according to universal time
    Date.prototype.getUTCMilliseconds() - returns the milliseconds in the specified date according to universal time
    Date.prototype.getUTCMinutes() - returns the minutes in the specified date according to universal time
    Date.prototype.getUTCMonth() - returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year)
    Date.prototype.getUTCSeconds() - returns the seconds in the specified date according to universal time
    Date.prototype.setDate() - sets the day of the month for a specified date according to local time
    Date.prototype.setFullYear() - sets the full year for a specified date according to local time
    Date.prototype.setHours() - sets the hours for a specified date according to local time
    Date.prototype.setMilliseconds() - sets the milliseconds for a specified date according to local time
    Date.prototype.setMinutes() - sets the minutes for a specified date according to local time
    Date.prototype.setMonth() - sets the month for a specified date according to local time
    Date.prototype.setSeconds() - sets the seconds for a specified date according to local time
    Date.prototype.setTime() - sets the date and time value in the Date object
    Date.prototype.setUTCDate() - sets the day of the month for a specified date according to universal time
    Date.prototype.setUTCFullYear() - sets the full year for a specified date according to universal time
    Date.prototype.setUTCHours() - sets the hours value in the Date object using universal time
    Date.prototype.setUTCMilliseconds() - sets the milliseconds value in the Date object using universal time
    Date.prototype.setUTCMinutes() - sets the minutes value in the Date object using universal time
    Date.prototype.setUTCMonth() - sets the month value in the Date object using universal time
    Date.prototype.setUTCSeconds() - sets the seconds value in the Date object using universal time
    Date.prototype.toDateString() - converts the date portion of a Date object into a readable string
    Date.prototype.toISOString() - returns a string in simplified extended ISO format (ISO 8601)
    Date.prototype.toJSON() - returns a string representation of the Date object
    Date.prototype.toLocaleDateString() - returns a string with a language sensitive representation of the date portion of this date
    Date.prototype.toLocaleString() - returns a string with a language sensitive representation of this date
    Date.prototype.toLocaleTimeString() - returns a string with a language sensitive representation of the time portion of this date
    Date.prototype.toString() - converts a Date object to a string
    Date.prototype.toTimeString() - converts the time portion of a Date object to a string
    Date.prototype.toUTCString() - converts a Date object to a string, using the UTC time zone
    Date.prototype.valueOf() - returns the primitive value of a Date object




    