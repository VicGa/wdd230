const options = {year: 'numeric'};

let modified = document.querySelector('#currentDate');

let current_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;
copyright.innerHTML = current_year;