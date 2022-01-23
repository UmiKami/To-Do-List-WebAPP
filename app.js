let variables = document.documentElement.style


let addTaskBTN = document.querySelector(".addBTN")
let task = document.querySelector(".main-list__task")
let checkBox = document.querySelector(".main-list__task-left-checkbox")
let userTaskText = document.querySelector(".main-list__task-text")
let taskDelete = document.querySelector(".main-list__task-closeBTN")

// add task 
addTaskBTN.addEventListener("click", e => {
        let userInput = document.querySelector(".main-list__INPT")

        document.querySelector(".main-list").innerHTML += ` <div class="main-list__task">
        <label class="main-list__task-left">
            <span class="main-list__task-text">${userInput.value}</span>
            <input type="checkbox" class="main-list__task-left-checkbox">
            <span class="checkmark"></span>
        </label>
        <div class="main-list__task-right">
            <button class="main-list__task-closeBTN">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.58579" y1="24.2419" x2="24.2419" y2="1.58579" stroke="#7DDE92" stroke-width="4"/>
                    <line x1="24.2419" y1="24.0703" x2="1.58581" y2="1.41422" stroke="#7DDE92" stroke-width="4"/>
                </svg>  
            </button>  
        </div>
    </div>`

    console.log(userInput.value);
    console.log("You clicked me");
    
    // document.body.innerHTML += `<script src="./task.js"></script>`
})



