"use strict";
console.log('hello');
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates
mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);

// var map = new mapboxgl.Map({
//     container: "map",
//     style: 'mapbox://styles/mapbox/satellite-streets-v11',
//     center:[-98.4861, 29.4252],
//     zoom: 10,
//
// })


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center:[-116.849556 , 37.629562],
    zoom: 10,
})

// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4252])
//     .addTo(map);

// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })
// );

/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.
var markerTrip = new mapboxgl.Marker({
    color: "red",
    draggable: true
})
    .setLngLat([-116.849557 , 37.629562])
    .addTo(map);

// var popupTrip = new mapboxgl.Popup({
//     backgroundColor: 'red'
// })
//     .setLngLat([-116.849557 , 37.629562])
//     .setHTML("<p>Confirmed!</p>")
//     .addTo(map)


// TODO TOGETHER: Change the color of the marker


// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]

var popupTrip = new mapboxgl.Popup({
    backgroundColor: 'red'
})
    .setText("Confirmed!")
    .addTo(map)
    markerTrip.setPopup(popupTrip)


// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"
var popup = new mapboxgl.Popup()
    .setLngLat([-98.489615, 29.426827])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map)
    // .setTracker()

// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!


// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!
// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?
// markerTrip function(timespeed){
//
// }


popupTrip.on('close', function () {
    console.log('Closed popup')
})

/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter
// ex. function call: geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })


// geocode('Viale per Costa, 6/B, 33081 Aviano PN, Italy', mapboxApiToken).then(function(results){
//     // map.setCenter(results)
//     console.log(results)
//
//     var markerFood = new mapboxgl.Marker({
//         color: "red",
//         draggable: true
//     })
//         .setLngLat([12.58616, 46.073495])
//         .addTo(map)
//
//     var popupFood = new mapboxgl.Popup()
//         .setText("My Favorite food!")
//         .addTo(map)
//         markerFood.setPopup(popupFood)
//
//         map.flyTo({center: results})
//     })
//TODO: Using the geocode method above, add a marker at Codeup to the map


//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo
// * EXAMPLE:
// *
// *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
// *      // do something with results
// *  })

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method
reverseGeocode({lat: 12.58616, lng: 46.073495}, mapboxApiToken).then(function(results) {
    console.log(results)
 })

