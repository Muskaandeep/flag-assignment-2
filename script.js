// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayCountries(countries) {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.classList.add('country', 'p-4', 'text-center');

        const flag = document.createElement('img');
        flag.src = country.flags.svg;
        flag.alt = `${country.name.common} Flag`;
        flag.classList.add('rounded-t-md');

        const name = document.createElement('h2');
        name.textContent = country.name.common;
        name.classList.add('text-xl', 'font-semibold', 'mt-2');

        const googleMapsLink = document.createElement('a');
        googleMapsLink.href = country.maps.googleMaps;
        googleMapsLink.textContent = 'View on Google Maps';
        googleMapsLink.target = '_blank';
        googleMapsLink.classList.add('mt-2', 'inline-block', 'bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-md');

        countryElement.appendChild(flag);
        countryElement.appendChild(name);
        countryElement.appendChild(googleMapsLink);
        countriesContainer.appendChild(countryElement);
    });
}
