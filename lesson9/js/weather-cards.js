
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
            photo.setAttribute('src','/wdd230/lesson9/images/' + towns[i].photo);
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

