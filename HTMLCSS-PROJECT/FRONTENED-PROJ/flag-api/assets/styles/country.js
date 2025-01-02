const countryName = new URLSearchParams(location.search).get('name');

let flagImg = document.querySelector('.country-img img'); //^

const countryDetails = document.querySelector('.details-container');
const countryDetailsH1 = document.querySelector('.details-container h1');
const nativeName = document.querySelector('.details-container nativeName');
const population = document.querySelector('.details-container population');
const region = document.querySelector('.details-container region');
const subRegion = document.querySelector('.details-container subRegion');
const capital = document.querySelector('.details-container capital');

const domainName = document.querySelector('.details-container domainName');
const currencies = document.querySelector('.details-container currencies');
const languages = document.querySelector('.details-container languages');

// const miniDetails = document.querySelector('.mini-container');



document.addEventListener('DOMContentLoaded', () => { 
    const params = new URLSearchParams(window.location.search); 
    const countryName = params.get('name'); 
     
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`) 
        .then((response) => response.json()) 
        .then((data) => { 
            console.log(data[0]);
            const country = data[0]; 

            flagImg.src = country.flags.svg;
            if(country.name.nativeName){
                nativeName.innerText = country.name.nativeName?.eng
            } else {
                nativeName.innerText = country.name.common
            }
            countryDetailsH1.innerText = country.name.common;
            population.innerText = country.population;
            region.innerText = country.region;
            subRegion.innerText = country.subRegion;
            capital.innerText = country.capital;
            domainName.innerText = country.domainName;
            currencies.innerText = country.currencies;
            languages.innerText = country.languages;

            
            
            // const countryDetailsCard = document.createElement('div');
            // countryDetailsCard.classList.add('countryDetailsCard');

            // miniDetails.innerHTML = 
            // `
            //     <h1>${country.name.common}</h1>
            //     <div class="row detailstext">
            //         <div class="col-6">
            //             <p><b>Native Name: </b>${country.name.nativeName?.eng}</p>
            //             <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>            
            //             <p><b>Region: </b>${country.region}</p>
            //             <p><b>Sub-Region: </b>${country.region}</p>
            //             <p><b>Capital: </b>${country.capital}</p>
            //         </div>
                    
            //         <div class="col-6">
            //             <p><b>Top Level Domain: </b>${country.demonyms.eng.f}</p>
            //             <p><b>Currencies: </b>${country.currencies.SHP.name}</p>
            //             <p><b>Languages: </b>${country.languages.eng}</p>
            //         </div>
            //     </div>


            //     <div class="row mt-5">
            //         <p><b>Border Countries: </b>
            //             <a class="back-btn" href="">France</a>
            //             <a class="back-btn" href="">Germany</a>
            //             <a class="back-btn" href="">Netherland</a>
            //         </p>
            //     </div>
            // `;


            // countryDetails.append(miniDetails);
    })
    
})