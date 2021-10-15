
"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */
let starWarsApi = fetch('https://swapi.dev/api/films')
var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?
// console.log(pokemonAPI)
//TODO: add a method that runs if the Promise resolves successfully
//TODO: add a method that runs if the Promise fails
//TODO: In the callback function of the .then method, parse the response into JSON
// pokemonAPI.then(function(result){
//     console.log(result)
//     result.json().then(function(text){
//         console.log(text)
//     })
// })




// function findPokemon(name){
//     return 'https://pokeapi.co/api/v2/pokemon/' + name
// }
/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(function(response){
//         return response.json()
//             .then(function(jsonData){
//                 return jsonData.results
//                     .then(function(results){
//                         return results
//                             .forEach(function(result){
//                                 return console.log(result.name)
//                     })
//                 })
//         })
// })

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response)=>response.json())
//     .then((jsonData)=>jsonData.results)
//     .then((results)=>results.forEach((result)=>console.log(result.name)));






// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

// TODO: Use Promise chaining to console log the json response
// fetch('https://swapi.dev/api/films')
//     .then((callForJson)=>{
//         return callForJson.json();
//     }).then((StarWarsData)=>{
//         console.log(StarWarsData)
//         StarWarsData.results.forEach((film)=>{console.log(film.title)})
// })
//
// fetch('https://swapi.dev/api/films').then(function(callForJson){
//         return callForJson.json();
//     }).then(function(StarWarsData){
//         console.log(StarWarsData)
//     StarWarsData.results.forEach(function(film){
//         console.log(film.title)})
// })

// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race

// Promise.all([starWarsApi, pokemonAPI])
//     .then((responses)=>{
//         return Promise.all(
//             responses.map((response)=>{
//                     return response.json()
//                 }
//             ))
//     }).then((parseResults)=>{
//         console.log(parseResults)
// });


// Promise.race([pokemonAPI, starWarsApi])
//     .then((response)=>{console.log(response)})













