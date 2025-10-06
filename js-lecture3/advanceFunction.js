//scope chain 
//lexical scope
// let a = 10;

// function outer(){
//     let b = 20;

//     function inner(){
//         let c = 30;
//         console.log(a,b,c)
//     }
//     console.log(a,b)
//     inner()
// }

// outer()
///////////////

// closure

// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count)
//     }
  
//     return inner;
// }

// let counter = outer() /// counter() = inner()
// counter()
// counter()
// counter()
// counter()
// counter()
// console.log(counter)

// let counter2 = outer()
// counter2()
// counter2()
// counter2()


function makeAdder(x){
    
    return function(y){   
        return x+y
    }
  
   
}

let add1 = makeAdder(5)

console.log(add1)
console.log(add1(3))


let add = makeAdder(4) 
console.log(add(7))

add = 

function(y){   
        return x+y
    }