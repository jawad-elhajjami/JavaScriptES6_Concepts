/*
* Author : EL HAJJAMI Jawad
* Title : JavaScript ES6 Important Concepts - Destructering
*/

// Object Destructering

let personObj = {
    name: "EL HAJJAMI Jawad",
    age: 22,
    major: "Computer Science"
}

let {name, age} = personObj;

console.log(name)
console.log(age)

// Array destructering

let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
let [fruit1, fruit2] = fruits;

console.log(fruit1)
console.log(fruit2)

// The Rest Property

