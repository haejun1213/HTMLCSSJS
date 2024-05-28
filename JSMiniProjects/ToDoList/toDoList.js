window.onload = function() {
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", function() {
        if (todoInput.value != "") addTodoList();
    });
}

function addTodoList() {
    console.log(todoInput.value);
    
    const listArea = document.querySelector(".listArea");
    
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    todoText.innerText = todoInput.value;
    todoInput.value = "";
    delBtn.innerText = "X"

    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");

    checkBtn.addEventListener("click", function() {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        }
        else {
            checkBtn.innerHTML = "";
        }
        todoText.classList.toggle("check");
    })

    delBtn.addEventListener("click", function() {
        liNode.remove();
    })

    console.log(listArea.lastChild);
}