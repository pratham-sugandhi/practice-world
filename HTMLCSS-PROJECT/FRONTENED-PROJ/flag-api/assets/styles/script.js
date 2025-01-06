
// document.addEventListener('DOMContentLoaded', () => {
//     const countriesContainer = document.querySelector('.countries-container');
//     const searchFilter = document.querySelector('.select-option')

//     fetch('https://restcountries.com/v3.1/all')
//         .then((res) => res.json())
//         .then(renderCountries)

//         searchFilter.addEventListener('change', (e) => {
//             // console.log(e.target.value);
//             fetch(`https://restcountries.com/v3.1/region/${searchFilter.value}`)
//             .then((res) => res.json())
//             .then(renderCountries)
//         })

//         function renderCountries (data) {
//             data.forEach((country) => {
//                 // countriesContainer.innerHTML = ''
//                 // console.log(country);
        
//                 const countryCard = document.createElement('a');
//                 countryCard.classList.add('country-card');
//                 countryCard.href = `/FRONTENED-PROJ/flag-api/country.html?name=${country.name.common}`;
        
        
//                 countryCard.innerHTML = `
//                 <img src="${country.flags.svg}" alt="${country.name.common} flag">
//                 <div class="card-text">
//                     <h3 class="card-title">${country.name.common}</h3>
//                     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//                     <p><b>Region: </b>${country.region}</p>
//                     <p><b>Capital: </b>${country.capital?.[0]}</p>
//                 </div>
//                 `
        
//                 countriesContainer.append(countryCard)
//                 // console.log(countryCard);
        
//             });
//         }

// })

document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.querySelector('.countries-container');
    const searchFilter = document.querySelector('.select-option');

    if (!searchFilter) {
        console.error('Missing .select-option element');
        return;
    }

    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then(renderCountries)
        .catch(error => console.error('Error fetching all countries:', error));

    searchFilter.addEventListener('change', (e) => {
        // Clear previous results
        countriesContainer.innerHTML = '';

        const region = searchFilter.value;
        if (!region) {
            console.error('Undefined region');
            return;
        }

        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((res) => res.json())
            .then((data) => {
                // Ensure data is an array
                if (Array.isArray(data)) {
                    renderCountries(data);
                } else {
                    console.error('API response is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching region data:', error));
    });
});

function renderCountries(data) {
    const countriesContainer = document.querySelector('.countries-container');

    if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return;
    }

    data.forEach((country) => {
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href = `/FRONTENED-PROJ/flag-api/country.html?name=${country.name.common}`;

        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} flag">
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>
        `;

        countriesContainer.append(countryCard);
    });
}



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