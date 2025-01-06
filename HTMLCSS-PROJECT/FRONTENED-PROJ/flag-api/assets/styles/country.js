const countryName = new URLSearchParams(location.search).get('name');

let flagImg = document.querySelector('.country-img img'); 

const countryDetails = document.querySelector('.details-container');
const countryDetailsH1 = document.querySelector('.details-container h1');
const nativeName = document.querySelector('.details-container .nativeName');
const population = document.querySelector('.details-container .population');
const region = document.querySelector('.details-container .region');
const subRegion = document.querySelector('.details-container .subRegion');
const capital = document.querySelector('.details-container .capital');

const domainName = document.querySelector('.details-container .domainName');
const currencies = document.querySelector('.details-container .currencies');
const languages = document.querySelector('.details-container .languages');
const borderCountries = document.querySelector('.border-countries');



document.addEventListener('DOMContentLoaded', () => { 
    const params = new URLSearchParams(window.location.search); 
    const countryName = params.get('name'); 
     
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`) 
        .then((response) => response.json()) 
        .then((data) => { 
            console.log(data[0]);
            const country = data[0]; 

            flagImg.src = country.flags.svg;

            
            countryDetailsH1.innerText = country.name.common;
            population.innerText = country.population.toLocaleString('en-IN');
            region.innerText = country.region;
            domainName.innerText = country.tld.join(', ');


            if(country.capital){
                capital.innerText = country.capital?.[0];
            }

            if(country.subRegion){
                subRegion.innerText = country.subregion;
            }

            if(country.capital){
                capital.innerText = country.capital?.[0];
            }

            if(country.languages){
                languages.innerText = Object.values(country.languages).join(', ');
            }


            if(country.currencies){
                currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ');
            }

            if(country.subRegion){
                subRegion.innerText = country.subregion;
            } else {
                subRegion.innerText = country.region;
            }

            if(country.name.nativeName){
                nativeName.innerText = Object.values(country.name.nativeName)[0].common;
            } else {
                nativeName.innerText = country.name.common
            }
            
        if(country.borders){
            country.borders.forEach((border) => {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((response) => response.json())
                    .then(([borderCountry]) => {
                        // console.log(borderCountry);
                        const borderCountryTag = document.createElement('a');
                        borderCountryTag.classList.add('back-btn');

                        borderCountryTag.innerText = borderCountry.name.common;
                        borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                        borderCountries.append(borderCountryTag);
                        
                    })
            })
        }
            
    })
    
})

const body = document.querySelector("body");

let themeChanger = document.querySelector('.theme-changer');
let isDarkMode = false;

themeChanger.addEventListener('click', function(e){
    document.body.classList.toggle('light');

    isDarkMode = !isDarkMode;
    if(isDarkMode){
        lightModde()
    } else {
        darkMode()
    }
})

let lightModde = function (){
    themeChanger.innerHTML= `<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode`;  
}

let darkMode = function(){
    themeChanger.innerHTML= `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
}