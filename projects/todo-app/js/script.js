// Seleção de elementos
const addForm = document.querySelector("#add-form");
const addInput = document.querySelector("#add-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEdit = document.querySelector("#cancel-edit-button");
const searchInput = document.querySelector("#search-input");

// Variáveis globais.
let todoBeingEdited;

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const finishBtn = document.createElement("button");
    finishBtn.classList.add("check-todo");
    finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(finishBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    addInput.value = "";
    addInput.focus();
}

const updateTodo = (text) => {
    todoBeingEdited.querySelector("h3").innerText = text;
}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    addForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const searchTodo = (searchQuery) => {
    const todos = todoList.querySelectorAll("todo");

    todos.forEach((todo) => {
        const todoTitle = todo.querySelector("h3").innerText.toLowerCase(); 
        if (todoTitle.contains(searchQuery)) {
            todo.classList.remove("hide");
        } else {
            todo.classList.add("hide");
        }
    });
}

// Eventos
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addInput.value;

    if (inputValue) {
        // Save todo-task.
        saveTodo(inputValue);
    }
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = editInput.value;
    if (inputValue) {
        updateTodo(inputValue);
        toggleForms();
    }
})

cancelEdit.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value;
    searchTodo(searchQuery);
})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("check-todo")) {
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();

        let todoTitle = parentEl.querySelector("h3").innerText;
        editInput.value = todoTitle;
        todoBeingEdited = parentEl;
    }

    if (targetEl.classList.contains("delete-todo")) {
        todoList.removeChild(parentEl);
    }
})