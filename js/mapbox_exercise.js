// Mapbox

mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);


// The Map

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    // center:[-116.849556 , 37.629562],
    zoom: 10,
})

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

//Fav Locations

geocode('Viale per Costa, 6/B, 33081 Aviano PN, Italy', mapboxApiToken).then(function(results){
    // map.setCenter(results)
    console.log(results)

    var markerFood = new mapboxgl.Marker({
        color: "red",
        draggable: true
    })
        .setLngLat([12.58616, 46.073495])
        .addTo(map)

    var popupFood = new mapboxgl.Popup()
        .setText("My Favorite food!")
        .addTo(map)
    markerFood.setPopup(popupFood)

    map.flyTo({center: results})
})

geocode('10401 Montgomery Blvd NE, Albuquerque, NM 87111', mapboxApiToken).then(function(results){
    // map.setCenter(results)
    console.log(results + "dions")

    var markerFood = new mapboxgl.Marker({
        color: "red",
        draggable: true
    })
        .setLngLat([-106.524017,35.131113])
        .addTo(map)

    var popupFood = new mapboxgl.Popup()
        .setText("My Favorite food!")
        .addTo(map)
    markerFood.setPopup(popupFood)

    map.flyTo({center: results})
})

geocode('1431 NY-300, Newburgh, NY 12550', mapboxApiToken).then(function(results){
    // map.setCenter(results)
    console.log(results + 'Leos')

    var markerFood = new mapboxgl.Marker({
        color: "red",
        draggable: true
    })
        .setLngLat([-74.071606,41.524255])
        .addTo(map)

    var popupFood = new mapboxgl.Popup()
        .setText("My Favorite food!")
        .addTo(map)
    markerFood.setPopup(popupFood)

    map.flyTo({center: results})
})
// Popup Functionality
// popupFood.on('close', function () {
//     console.log('Closed popup')
// })

