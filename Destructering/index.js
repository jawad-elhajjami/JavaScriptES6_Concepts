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
// the syntax ...arrayName => means that all the other elements of the array will be stored there
let languagesArray = ["Arabic","English", "Spanish", "Italian", "Mandarin", "French"];
let [langA,langB, ...otherLangs] = languagesArray;

console.log(langA); // returns Arabic
console.log(langB); // returns English
console.log(otherLangs); // returns [Spanish,Italian,Mandarin,French]
