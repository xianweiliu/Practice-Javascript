// fetch practice

// url of the api
const URL = "https://swapi.co/api/planets/";

//  checking if the response is ok
const checkStatusAndParse = response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    // return the parsed response
    return response.json();
};
//  prints planet Name based on checkStatusAndParse returned
const printPlanetNames = data => {
    for (let planets of data.results) {
        console.log(planets.name);
    }
    // return a brand new promise that is resolved
    // in this case it is the url that retrieved from the data
    return Promise.resolve(data.next);
};
// fetch the next page of planets that retrieved from printPlanetNames
const fetchNextTenPlanets = url => {
    return fetch(url);
};

// grouped promises to make it more readable
fetch(URL)
    .then(checkStatusAndParse)
    .then(printPlanetNames)
    .then(fetchNextTenPlanets)
    .then(checkStatusAndParse)
    .then(printPlanetNames)
    .then(fetchNextTenPlanets)
    .then(checkStatusAndParse)
    .then(printPlanetNames)
    // this runs when something went wrong. ex. internet down, cannot access to api
    .catch(err => {
        console.log("SOMETHING WENT WRONG");
        console.log(err);
    });
