




const pokemonAPI = "https://pokeapi.co/api/v2/pokemon"
//Get all
function getPokemons(){
    return fetch(pokemonAPI).then((callJson)=>callJson.json());
}




//Get a by ID
function getPokemon(){
    return fetch('${pokemonAPI}/${results}')
        .then((callJson)=>callJson.json());
}


//function(11)

// function editDog(dog) {
//     let options = {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dog)
//     }
//     return fetch('${pokemonAPI}/${dog.id}' , options)
//         .then((callJson)=>callJson.json())
// }
//
// let frodo = {
//     name: 'Frodo',
//     isGoodDog: true,
//     id: 11,
//     age: 3
//
// }


// editDog(frodo).then((data)=>console.log(data))

//Delete by
// function deleteDog(id){
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     fetch('${pokemonAPI}/${id}', options)
//         .then((callJson)=>console.log("Delete dog" + id, callJson))
// }

//Create dog
// function createDog(dog) {
//     let options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dog)
//     }
//     return fetch('${pokemonAPI}/${dog.id}' , options)
//         .then((callJson)=>callJson.json())
// }

// let sam = {
//     name: 'Sam',
//     isGoodDog: true,
//     age: 3
//
// }

// createDog(sam).then((newDog)=>console.log(newDog))
