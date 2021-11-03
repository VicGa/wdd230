

//--------------------FUNCTION TOGGLE MENU--------------------------


function toggleMenu() {document.getElementById("primaryNav").classList.toggle("hide")};


//-------------------END FUNCTION TOGGLE MENU--------------------

//------------------CURRENT DAY FUNCTION---------------------

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agugust",
    "September",
    "October",
    "November",
    "December",
];
const todaysdate = new Date();
const dayName =  dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName  + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();


document.getElementById('currentdate').textContent = currentdate;

//--------------------END CURRENT DAY FUNCTION----------------


//-----------------------LAZY LOAD FUNCTION---------------------


const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src){ return;}
    img.src = src;
};

const imgOptions = {
    threshold: 0,
    rootMargin:"0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {if (!entry.isIntersecting) { return;}
                            else {preloadImage(entry.target);imgObserver.unobserve(entry.target);}})

}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

//-----------------------END LAZY LOAD FUNCTION------------------------------


