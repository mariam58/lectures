"use strict"


// console.log(fruits.length);
// console.log(fruits[0]);
// fruits[2]="apple"
// console.log(fruits);



// numbersArr.push(9)
// console.log(numbersArr)
// numbersArr.push(98)
// console.log(numbersArr)

// let deletedelementfromlast = numbersArr.pop();
// console.log(deletedelementfromlast+"%%%%%")
// console.log(numbersArr)

// numbersArr.unshift(11)
// console.log(numbersArr)

// let deletedFirstElement = numbersArr.shift()
// console.log(deletedFirstElement)

// let mixedArray = ["mariam", 8, [6,4], {name: "mariam"}];

// console.log(mixedArray[2][1]);
// console.log(mixedArray[3].name);

// let fruits = ["apple", "orange", "banana", "cherry", "kiwi"];
// console.log(fruits.indexOf("mariami"))

// console.log(fruits.includes("mariami"))

// let slicedArr = fruits.slice(2,4)
// console.log(fruits)
// console.log(slicedArr)

// fruits.splice(1,2)
// fruits.splice(2,2,"mango", "item")
// console.log(fruits)

// let joinedArr = fruits.join("-")
// console.log(joinedArr)

let numbersArr = [1, 2, 3];

let doublednumbersArr = numbersArr.map(num => num * 2)

console.log(doublednumbersArr)
console.log(numbersArr)

let even = numbersArr.filter(num => num%2 ===0)
console.log(even)
let firstbig = numbersArr.find(num=>num>2)
console.log(firstbig)
