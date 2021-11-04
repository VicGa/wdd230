

//--------------------FUNCTION TOGGLE MENU--------------------------


function toggleMenu() {document.getElementById("primaryNav").classList.toggle("hide")};


//-------------------END FUNCTION TOGGLE MENU--------------------


//-----------------------LAZY LOAD FUNCTION---------------------

// get all imges with data-src attribute

const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the Intersectional Observer
const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = ()=> {image.removeAttribute('data-src')};

};

// first check to see if Intersection Observer is supported

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item)=>{
            if(item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }

        });
    }, imgOptions);
// loop through each img an check status and load if necesary
    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });

}

//-----------------------END LAZY LOAD FUNCTION------------------------------


