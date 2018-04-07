//fetched the area location from this endpoint
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//done with ES6 and in react as well
 fetch(endpoint).then(something => something.json())
                .then(data => cities.push(...data)) //use ... [spread] so that the array isn't nested in the cities array. 

                function findMatches(wordToMatch, cities) {
                    return cities.filter(place => {
                        //see if city/state matches what was searched on the form
                        const regex = new RegExp(wordToMatch, 'gi'); //Regex pulls from the gist above by saying 'gi'
                        return place.city.match(regex) || place.state.match(regex) //matches from the city or state
                    });
                }
                
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                  }

                function displayMatches() {
                    const matchArray = findMatches(this.value, cities);
                    const html = matchArray.map(place => {
                    const regex = new RegExp(this.value, "gi");
                    const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
                    const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
                        return `
                        <li>
                            <span class = "name"> ${cityName}, ${stateName}</span>
                            <span class = "population"> ${numberWithCommas(place.population)} </span>
                        </li>
                        `;
                    }).join('');
                        suggestions.innerHTML = html;
                }

                //find via inspect on elements
                const searchInput = document.querySelector('.search'); //this is the class for the search form
                const suggestions = document.querySelector('.suggestions'); //this is the class for the filter for city/state

                searchInput.addEventListener('change', displayMatches); //listens for change event
                searchInput.addEventListener('keyup', displayMatches); //to address the keys

        