
//******************************START FUNCTION TOGGLE MENU******************************/

function toggleMenu() {document.getElementById("primaryNav").classList.toggle("hide");

}
//******************************END FUNCTION TOGGLE MENU******************************/


//******************************START FUNCTION DATE******************************/
const options = {year: 'numeric'};
let modified = document.querySelector('#currentDate');

let current_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;
copyright.innerHTML = current_year;
//******************************END FUNCTION DATE******************************/


//*****************************START FUNCTION TO CREATE CARDS****************************/
            //*****SAVE THE RESOURCES IN A VARIABLE*******/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

            //*********FETCH FUNCTION****** */
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Spring" || towns[i].name == 'fush Haven'){
                //****CREATE VARIABLE******* */

            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h4');
            let yearFunded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let photo = document.createElement('img');

            //**********ADD TEXT CONTENT********** */

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFunded.textContent = 'Year Funded:' + ' ' + towns[i].yearFunded;
            currentPopulation.textContent = 'Current Population:' + ' ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;
            photo.setAttribute('src', towns[i].photo);
            photo.setAttribute('alt', towns[i].name);

            //************ADD CHILD TO CARD******* */

            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);
            card.appendChild(photo);

            //***************ADD CARDS TO DIV-CRADS**********/

            document.querySelector('div.cards').appendChild(card);
            }

           
        }
    });


//*****************************END FUNCTION TO CREATE CARDS****************************/

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
  
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let image = document.createElement('img');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let details = document.createElement('div');
      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      image.setAttribute('src', '/lesson9/images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);
      details.setAttribute('id', 'details');
      card.appendChild(details);
      card.appendChild(image);
      details.appendChild(name);
      details.appendChild(motto);
      details.appendChild(yearFounded);
      details.appendChild(currentPopulation);
      details.appendChild(averageRainfall);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});