function toggleMenu() {document.getElementById("primaryNav").classList.toggle("hide");

}

const options = {year: 'numeric'};

let modified = document.querySelector('#currentDate');

let current_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;
copyright.innerHTML = current_year;
let day = d.getDay();
if (day == 'Friday') {
    document.getElementById("announce").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("announce").style.display = "block";
}
else {
    document.getElementById("announce").style.display = "none";
}