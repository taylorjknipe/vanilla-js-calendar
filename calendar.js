const currDate = document.querySelector("#current-date");
const daysGrid = document.querySelector('#days');
const prevIcon = document.querySelector('#prev');
const nextIcon = document.querySelector('#next');
const todoDayHeader = document.querySelector('#todo-day-header');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();
let activeDate = `${currDay}-${currMonth + 1}-${currYear}`;

function loadCalendar() {
    let firstDay = new Date(currYear, currMonth, 1).getDay();
    let lastDate = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDateLastMonth = new Date(currYear, currMonth, 0).getDate();
    let lastDay = new Date(currYear, currMonth, lastDate).getDay();
    let numDiv = "";

    for (let i = firstDay; i > 0; i--) {
        numDiv += `<div class="number inactive">${lastDateLastMonth - i + 1}</div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        if (i === currDay && currMonth === date.getMonth()) {
            numDiv += `<div class="number today active"><span id = "today-date">${i}</span></div>`;
        } else {
            numDiv += `<div class="number">${i}</div>`;
        }
    }

    for (let i = lastDay; i < 6; i++) {
        numDiv += `<div class="number inactive">${i - lastDay + 1}</div>`;
    }

    currDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysGrid.innerHTML += numDiv;

}

function resetActive() {
    loadCalendar();
    let numbers = document.querySelectorAll('.number');
    let parseFormat;
    for (number of numbers) {
        number.classList.remove('active');
        parseFormat = `${number.textContent}-${currMonth + 1}-${currYear}`;
        if (parseFormat === activeDate && !number.classList.contains('inactive')) {
            number.classList.add('active');
        }
    }
}

loadCalendar();


prevIcon.addEventListener("click", () => {
    if (currMonth === 0) {
        currYear--;
        currMonth = 11;
        daysGrid.innerHTML = '<div class="day">Sun</div><div class="day" > Mon</div ><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div>';
        resetActive();
    } else {
        currMonth--;
        daysGrid.innerHTML = '<div class="day">Sun</div><div class="day" > Mon</div ><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div>';
        resetActive();
    }
})

nextIcon.addEventListener("click", () => {
    if (currMonth === 11) {
        currYear++;
        currMonth = 0;
        daysGrid.innerHTML = '<div class="day">Sun</div><div class="day" > Mon</div ><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div>';
        resetActive();
    } else {
        currMonth++;
        daysGrid.innerHTML = '<div class="day">Sun</div><div class="day" > Mon</div ><div class="day">Tue</div><div class="day">Wed</div><div class="day">Thu</div><div class="day">Fri</div><div class="day">Sat</div>';
        resetActive();
    }
})

daysGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("number") && !e.target.classList.contains("inactive") && !e.target.classList.contains("active")) {
        let activeDay = document.querySelector('.active');
        if (activeDay) {
            activeDay.classList.remove("active");
        }
        e.target.classList.add("active");
        activeDay = e.target;
        activeDate = `${e.target.textContent}-${currMonth + 1}-${currYear}`;

        loadList(activeDate);
        if (activeDate !== `${currDay}-${currMonth + 1}-${currYear}`) {
            todoDayHeader.textContent = `${months[currMonth].substring(0, 3)} ${e.target.textContent}, ${currYear}`;
        } else {
            todoDayHeader.textContent = "Today";
        }
        inputBox.value = '';
    } else if (e.target.id === "today-date") {
        let activeDay = document.querySelector('.active');
        if (activeDay) {
            activeDay.classList.remove("active");
        }
        document.querySelector('.today').classList.add("active");
        activeDay = document.querySelector('.today');
        activeDate = `${e.target.textContent}-${currMonth + 1}-${currYear}`;

        loadList(activeDate);
        if (activeDate !== `${currDay}-${currMonth + 1}-${currYear}`) {
            todoDayHeader.textContent = `${months[currMonth].substring(0, 3)} ${e.target.textContent}, ${currYear}`;
        } else {
            todoDayHeader.textContent = "Today";
        }
        inputBox.value = '';
    }
});



activeDate = `${currDay}-${currMonth + 1}-${currYear}`;
loadList(activeDate);

