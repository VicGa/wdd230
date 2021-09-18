//day names array 
const daynames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// month names array

const monthnames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

const todaysDate = new Date();
const dayNames = daynames[todaysDate.getDay()];
const monthNames = monthnames[todaysDate.getMonth()];
const yearNames = todaysDate.getFullYear;
const currentdate = dayNames + ', ' + todaysDate.getDate() + ' ' + monthNames + ', ' + todaysDate.getFullYear();






document.getElementById('currentDate').textContent=currentdate;