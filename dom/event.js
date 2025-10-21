const btn = document.getElementById("btn")
// mouse events: click; dblclick; mouseover; mouseout
btn.addEventListener("mouseout", ()=>{

    console.log("out")

})
btn.addEventListener("click", removeListener)

btn.addEventListener("mouseover", ()=>{

    console.log("over")

})

function removeListener() {
    console.log("removed")
}


btn.removeEventListener("click", removeListener)

//keyboard events: keydown; keyup; keypress

// btn.addEventListener("keydown", ()=>{
//     alert("keypress")
// })

// const text = document.getElementById("text")
// const input = document.getElementById("input")
// const form = document.getElementById("form")
// const link = document.getElementById("link")

// // input.addEventListener("input", (event)=>{
// //     text.textContent = event.target.value
// // })

// input.addEventListener("change", (event)=>{
//     text.textContent = event.target.value
// })

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     console.log("submited")
// })

// link.addEventListener("click", (e)=>{
//     e.preventDefault()
//     // window.location.href = link.href
//     console.log(window.location)
// })


