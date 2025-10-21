// console.log(window.document)

// const pElement = document.getElementById("pElement")
// console.log(pElement)
// console.log(pElement.outerHTML);
// pElement.innerText= '<p class="pElement2">Lorem ipsum dolor sit amet.</p>'
// pElement.textContent= '<p class="pElement2">Lorem ipsum dolor sit amet.</p>'
// pElement.innerHTML= '<p class="pElement2">Lorem ipsum dolor sit amet.</p>'
// console.log(pElement.innerHTML);
// console.log(pElement.textContent);
// console.log(pElement.outerHTML);

// const getElByTagName = document.getElementsByTagName("p")
// console.log(getElByTagName)


// const getElByClass = document.getElementsByClassName("pElementClass")

// console.log(getElByClass)

// const el = document.querySelectorAll("p")

// console.log(el)

const newP = document.createElement("p")
newP.textContent ="created from js"
const container = document.getElementById("container")
container.appendChild(newP)
// console.log(getElByTagName)
const el2 = document.querySelectorAll("p")

// console.log(el2)


// const container = document.getElementById("container")
// container.style.backgroundColor="red"

const img = document.getElementById("img")
// img.setAttribute("src", "download.png")

// img.remove()

// container.classList.add("border")
// container.classList.remove("border")

// console.log(container.classList)

// const parent = document.getElementById("parent")

// const child = document.getElementById("child")

// console.log(child.parentElement)
// console.log(child.parentNode)

// console.log(parent.children)
// console.log(parent.childNodes)
// console.log(parent.lastElementChild.outerHTML)

console.log(img.previousElementSibling)

