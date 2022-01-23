let variables = document.documentElement.style

let userInput = document.querySelector(".main-list__INPT")

let addTaskBTN = document.querySelector(".addBTN")
let task = document.querySelector(".main-list__task")
let checkBox = document.querySelector(".main-list__task-left-checkbox")
let userTaskText = document.querySelector(".main-list__task-text")
let taskDelete = document.querySelector(".main-list__task-closeBTN")

console.log("Task is not null, it should work");
// change state

checkBox.addEventListener("click", e => {
    let isChecked = e.currentTarget.checked

    isChecked ? (task.classList.add("task-checked"), variables.setProperty("--task-text", "var(--task-checked-text)")) : (task.classList.remove("task-checked"), variables.setProperty("--task-text", "var(--task-unchecked-text)"))
})


// delete task

taskDelete.addEventListener("click", e => {
    task.remove()
})