//***************************TOGGLE MENU************************/
function toggleMenu() {document.getElementById("primaryNav").classList.toggle("hide");

}
//****************************CURRENTLY DAY**********************/
const options = {year: 'numeric'};

let modified = document.querySelector('#currentDate');

let current_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;

//*******************************CURRENTE WEATHER FOR WEATHER SUMARY***********/


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';

fetch(apiURL)
  .then((response) =>response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    const wspeed = jsObject.wind.speed;  
    const windchill = jsObject.wind.deg;  
    const humidity = jsObject.main.humidity;  
    document.getElementById('currently').textContent = desc;
    document.getElementById('windspeed').textContent = wspeed;
    document.getElementById('windchill').textContent = windchill;
    document.getElementById('humidity').textContent = humidity;

    
    });


/*const apiOnecall = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&appid=dce9526fd98f1b67e5a066b73747e133';

fetch(apiOnecall)

    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const ds = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dai = 0;

        const fores = jsObject.daily;
        console.log(fores);

        fores.forEach(i => {
        let y = new Date(i.sunrise);
        document.getElementById('high-'+(dai+1)).textContent = Math.round(i.temp.day) + '°F';
        document.getElementById('icon'+(dai+1)).src = "https://openweathermap.org/img/w/" + i.weather[0].icon + ".png";
        document.getElementById('icon'+(dai+1)).alt = i.weather[0].description
        document.getElementById('day'+(dai+1)).textContent = ds[y.getDay()];
        dai++;
       	

        })



        

    });*/
    const apiForecast ='https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';

    fetch(apiForecast)
    
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            const forecast5 = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

            console.log(forecast5);
        
            const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        
            let day = 0;
            forecast5.forEach(forecast => {
            let y = new Date(forecast.dt_txt);
            document.getElementById('high-'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
            document.getElementById('icon'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('icon'+(day+1)).alt = forecast.weather[0].description
            document.getElementById('day'+(day+1)).textContent = days[y.getDay()];
            day++;	})
            });