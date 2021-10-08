// Mapbox
mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);


// The Map
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    // center:[-116.849556 , 37.629562],
    zoom: 1,
})

//Search Bar
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

//Zoom controls
map.addControl(new mapboxgl.NavigationControl());

//Fav Locations
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
//         .setText("New Ristos!")
//         .addTo(map)
//     markerFood.setPopup(popupFood)
//
//     map.flyTo({center: results})
// })
//
// geocode('10401 Montgomery Blvd NE, Albuquerque, NM 87111', mapboxApiToken).then(function(results){
//     // map.setCenter(results)
//     console.log(results + "dions")
//
//     var markerFood = new mapboxgl.Marker({
//         color: "red",
//         draggable: true
//     })
//         .setLngLat([-106.524017,35.131113])
//         .addTo(map)
//
//     var popupFood = new mapboxgl.Popup()
//         .setText("Dion's!")
//         .addTo(map)
//     markerFood.setPopup(popupFood)
//
//     map.flyTo({center: results})
// })
//
// geocode('1431 NY-300, Newburgh, NY 12550', mapboxApiToken).then(function(results){
//     // map.setCenter(results)
//     console.log(results + 'Leos')

    // var markerFood = new mapboxgl.Marker({
        // color: "red",
        // draggable: true
    // })
    //     .setLngLat([-74.071606,41.524255])
    //     .addTo(map)

//     var popupFood = new mapboxgl.Popup()
//         .setText("Leo's!")
//         .addTo(map)
//     markerFood.setPopup(popupFood)
//
//     map.flyTo({center: results})
// })
// Popup Functionality
// popupFood.on('close', function () {
//     console.log('Closed popup')
// })

//
//
// var markerFood = new mapboxgl.Marker({
//     color: "",
//     draggable: true
// })
//     .setLngLat([])
//     .addTo(map)
//
// var popupFood = new mapboxgl.Popup()
//     .setText("")
//     .addTo(map)
// markerFood.setPopup(popupFood)
//

$('body').css('background-color', 'grey')
var favFood = [
    {name:'leos', location: '1431 NY-300, Newburgh, NY 12550'},
    {name:'Dions', location: '10401 Montgomery Blvd NE, Albuquerque, NM 87111'},
    {name:'New Ristos', location: 'Viale per Costa, 6/B, 33081 Aviano PN, Italy'}
]

favFood.forEach(function (spot){
    geocode(spot.location, mapboxApiToken).then(function(location){
        var popup = new mapboxgl.Popup()
            .setHTML('<h3><em>' + spot.name + '</em></h3>');
        var Marker = new mapboxgl.Marker({
            color: "green",
            imgFile: '![](../img/pizza.png)'
        })
            .setLngLat(location)
            .addTo(map)
            .setPopup(popup);
    });
});














// var favFood = [
//     {
//         markerFood: "red",
//         setLngLat: [
//             "-74.071606 , 41.524255"
//         ],
//         popupFood: "Leo's!"
//     }
// ]















