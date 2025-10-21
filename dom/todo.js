const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("toDoList")

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((todo, index)=>{
        const li = document.createElement('li')

        const span = document.createElement('span')
        span.textContent = todo;
        li.appendChild(span)

        const editBtn = document.createElement('button')
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", ()=>editTodo(index));
        li.appendChild(editBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", ()=>deleteTodo(index));
        li.appendChild(deleteBtn)

        todoList.appendChild(li)
    })
}


addBtn.addEventListener("click", ()=>{
    const todoText = todoInput.value.trim()
    if(todoText){
        todos.push(todoText)
        saveAndRender();
        todoInput.value=''
    }else{
        alert('enter your task')
    }
})



function editTodo(index){
    const newText = prompt('edit task', todos[index])
    if(newText !== null){
        todos[index] = newText.trim()
        saveAndRender()
    }
}

function deleteTodo(index){
    todos.splice(index,1)
    saveAndRender()
}

function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()
}

renderTodos()