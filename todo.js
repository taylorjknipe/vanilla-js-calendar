const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const activeDay = document.querySelector('.active');
const todayDate = document.getElementById('today-date');

function addTask() {
    if (inputBox.value === '') {
        alert("Task name cannot be empty");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(activeDate);
}

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
}, false);

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(activeDate);
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(activeDate);
    }
}, false);

function saveData(activeDate) {
    localStorage.setItem(`${activeDate}`, listContainer.innerHTML);
}

function loadList(activeDate) {
    listContainer.innerHTML = localStorage.getItem(`${activeDate}`);
    
}

loadList(activeDate);

