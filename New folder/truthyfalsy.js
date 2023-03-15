/* // example for truthy and falsy values
// truthy values are values that are considered true when encountered in a boolean context
// falsy values are values that are considered false when encountered in a boolean context

// truthy values
true
{}
[]
42
"0"
"false"
new Date()
-42
3.14
-3.14
Infinity
-Infinity

// falsy values
false
null
undefined
0
-0
NaN
""
''
``
document.all */

// example for truthy and falsy values

let a=0

if(a){
    console.log("a is truthy")
}
else{
    console.log("a is falsy")
}
