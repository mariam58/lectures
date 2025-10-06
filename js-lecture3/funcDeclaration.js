// console.log(sum(2,5))
//rest parameter
function sum(...numbers){
//     console.log(arguments)
     let sum = 0;
     for (let i = 0; i < numbers.length; i++) {
          sum= sum+numbers[i]
          
     }
//     return arguments[0] + arguments[1]
return sum;
}
// sum(1,2)
console.log(sum(2,3,1,1))




// function printName(name){
//      return "hello "+name+"!"
// }

// function printName(name){
//      console.log("hello "+name+"!")
// }

// const name1 = printName("Tamta")
// const name2 = printName("mariami")
// console.log(name1 +"  "+ name2)


// let user1 = { 
//      name: "mariam",
//      age: 25
// }

// let user2 = { 
//      name: "tamta",
//      age: 28
// }

// function createUser(name) {
//      return {name: name};
// }

// let user = createUser("mariam")
// console.log(user)

// let userR = createUser("tamta")
// console.log(userR)


/// factory fuction

// function createUser(name, age) {
//      return {
//           name: name,
//           age: age,
//           printName(){
//                console.log("hello my name is" + name, ". My age is " + age)
//           }
//      };
// }


// let user1 = createUser("mariami", 29)
// let user2 = createUser("tamta", 22)
// user1.printName()
// user2.printName()
// console.log(user1)
// console.log(user2)


// function func(){
//      console.log(this===window)
// }

// func()
// console.log(window.console===console)

// var x = 10;
// let y  =7;
// window.y
// window.x

// window.func()

// var name = "leqso"
// const user1 = {
//      name: "mariam",
//      printName: function func(){
//           console.log(this.name)
//      }
// }
// call-site


// const user2 = {
//      name: "mariam",
//      printName: ()=>{
//           console.log(this.name)
//      }
// }
// user2.printName()


// const user1 = {
//      name: "mariam",
//      arr: [1,23,4],
//      printName: function func(){
//           // const func2 = ()=>{
//           //      console.log(this.name)
               
//           // }
//           // func2()
//           const doublednumbersArr = this.arr.map(num => num * 2)
//           console.log(doublednumbersArr)
//      }
// }

// user1.printName()

// constructor function

// var name = "tamta"
// function CreateUser(name, age) {
//           // console.log(this)
//           this.name = name;
//           console.log(name)
// return {x: 4}
//           // this.age = age;
//           // this.printName = function(){
//           //      console.log("hello my name is" + name, ". My age is " + age)
//           // }
// }

// let user1 = new CreateUser("Mariami", 99)
// console.log(user1)
// //  console.log(name)



// function CreateUser(name) {    
//           this.name = name;
//           this.printName = function(){
//                console.log("hello my name is" + name,)
//           }
// }

// let user1 = new CreateUser("Mariami")
// let user2 = new CreateUser("NIno")
// console.log(user1)
// console.log(user2)

// console.log(user1.printName === user2.printName)


/////////////
function CreateUserSecond(name) {    
          this.name = name;
}
CreateUserSecond.prototype.printName =  function(){
               console.log("hello my name is" + name,)
          }
let user1 = new CreateUserSecond("Mariami")
let user2 = new CreateUserSecond("Mariami")
console.log(user1.printName === user2.printName)

let arr = [1,2,3]
console.log(arr.push(5))
console.log(arr.push === Array.prototype.push)