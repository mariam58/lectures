// key : value pair
let person = {
    name: "mariami",
    age: 30,
    newproperty: "value",
    printName: function printName(){console.log(this.name)}
}
// console.log(person)
// console.log(person.name)
person.citizen= "georgian"
// person.age = 20;
// delete person.name
// console.log("age" in person)

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

person.printName()