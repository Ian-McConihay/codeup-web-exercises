// Mapbox

mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);


// The Map

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center:[-116.849556 , 37.629562],
    zoom: 10,
})

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