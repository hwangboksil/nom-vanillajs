const todosForm = document.querySelector("#todos-form");
const todoInput = todosForm.querySelector("input");
const inputList = document.querySelector("#todos-list");

let todoList = [];

const STORAGE_TODOS_KEY = "todos"

function saveTodos() {
    localStorage.setItem(STORAGE_TODOS_KEY, JSON.stringify(todoList));
}

function deleteTodo(event) {
    const getLi = event.target.parentElement;
    getLi.remove();
    todoList = todoList.filter((toDo) => toDo.id !== parseInt(getLi.id));
    saveTodos()
}

function loadTodos(newTodo) {
    const addLi = document.createElement("li");
    addLi.id = newTodo.id;
    const addSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    addSpan.innerText = newTodo.text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    addLi.appendChild(delBtn);
    addLi.appendChild(addSpan);
    inputList.appendChild(addLi);
}

function handleSubmitTodos(event) {
    event.preventDefault();
    const InputTodo = todoInput.value;
    todoInput.value = "";
    const newInputTodo = {
        text: InputTodo,
        id: Date.now(),
    }
    todoList.push(newInputTodo);
    loadTodos(newInputTodo);
    saveTodos();
}

todosForm.addEventListener("submit", handleSubmitTodos);

const getTodos = localStorage.getItem(STORAGE_TODOS_KEY);
if (getTodos !== null) {
    const parseToDos = JSON.parse(getTodos);
    todoList = parseToDos;
    parseToDos.forEach(loadTodos);
}