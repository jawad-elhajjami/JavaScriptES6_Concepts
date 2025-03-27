/*
* Author : EL HAJJAMI Jawad
* Title : JavaScript ES6 Important Concepts - Spread Operator
*/

/*
    The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
*/

let numbers = [4,5,6,7];
let newArray = [1,2,3,...numbers,8,9,10]
console.log(newArray)

// Used also in functions

function sum(x,y,z){
    return x + y + z;
}
let args = [4,6,8];
console.log(sum(...args)); // instead of sum(4,6,8)

// We could Also create object by using the spread operator on an array
let obj = {...args} // returns {'0': 4, '1': 6, '2':8}
console.log(obj)
