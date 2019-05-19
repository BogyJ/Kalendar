var datum = new Date();
let currentYear = datum.getFullYear();
let currentMonth = datum.getMonth();

// Months are starting from 0
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

window.addEventListener('load', init);

document.getElementById('month').innerHTML = months[datum.getMonth()] + ' ' + datum.getFullYear();

function init() {
    showCalendar(datum.getFullYear(), datum.getMonth());
}

function showNext() {
    if(currentMonth === 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
    } else {
        currentMonth = currentMonth + 1;
    }
    document.getElementById('table-body').innerHTML = '';
    document.getElementById('month').innerHTML = months[currentMonth] + ' ' + currentYear;
    showCalendar(currentYear, currentMonth);
}

function showPrevious() {
    if(currentMonth === 0) {
        currentYear = currentYear - 1;
        currentMonth = 11;
    } else {
        currentMonth = currentMonth - 1;
    }
    console.log(currentMonth);
    document.getElementById('table-body').innerHTML = '';
    document.getElementById('month').innerHTML = months[currentMonth] + ' ' + currentYear;
    showCalendar(currentYear, currentMonth);
}

function showCalendar(year, month) {
    let firstDay = (new Date(year, month)).getDay();
    firstDay = (firstDay === 0) ? firstDay = 7 : firstDay;
    let daysInMonth = 32 - (new Date(year, month, 32)).getDate();

    let tbody = document.getElementById('table-body');

    let date = 1;
    for(let i=0; i<6; i++) {
        let row = document.createElement('tr');
        for(let j=1; j<=7; j++) {
            if(i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                let cellText = document.createTextNode('');
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement('td');
                let cellText = document.createTextNode(date);
                if(date === datum.getDate() && year === datum.getFullYear() && month === datum.getMonth()) {
                    cell.className = "current-date";
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbody.appendChild(row);
    }
}
