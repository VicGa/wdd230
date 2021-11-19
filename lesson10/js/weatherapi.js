//**************CREATE A VARIABLE 'API-URL'******/

const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';

fetch(apiURL)
  .then((response) =>response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    
    

    
  });
