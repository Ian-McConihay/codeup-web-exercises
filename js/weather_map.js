// Mapbox
mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);


function convertDateTime(event){
    time.textContent=new Date(event.target.valueAsNumber*1000).toLocaleString();
}
function convertTime(dtNum){
    var dtInMs = dtNum * 1000; // date in miliseconds
    var dateObj = new Date(dtInMs);
    return dateObj.toLocaleString();
}


$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherApiKey,
    q:     "San Antonio, US",
    units: 'imperial',
    exclude:' hourly,alerts,minutely,hourly',
    dt: "#time"

}).done(function(data) {
    console.log(data);
    console.log(data.dt)







});













// // The Map
// var map = new mapboxgl.Map({
//     container: "map",
//     style: 'mapbox://styles/mapbox/satellite-streets-v11',
//     center:[-98.4936 , 29.4241],
//     zoom: 5,
// })
// // on: -98.4936, lat: 29.4241}
// //Search Bar
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })
// );
//
// //Zoom controls
// map.addControl(new mapboxgl.NavigationControl());