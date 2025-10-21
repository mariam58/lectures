localStorage.setItem('userName', 'Mariam')
// localStorage.setItem('userName2', 'Tamta')

// const user = localStorage.getItem('userName')
// console.log(user)
// const user2 = localStorage.getItem('userName2')
// console.log(user2)

// localStorage.removeItem('userName')
// localStorage.removeItem('userName2')

// console.log("text", localStorage.getItem('userName'))
// console.log("text", localStorage.getItem('userName2'))

// console.log(user)
// console.log(user2)

// localStorage.clear()
// console.log("text", localStorage.getItem('userName'))
// console.log("text", localStorage.getItem('userName2'))

const user = {
    name: "mariami",
    age: 29
}
console.log(user)
localStorage.setItem('user', JSON.stringify(user))

const userFromLocalStorage = localStorage.getItem('user')
console.log(userFromLocalStorage)

const parsedUser = JSON.parse(userFromLocalStorage)
console.log(parsedUser)
