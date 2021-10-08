// Mapbox
mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);
$('#weatherReport').css('border', '3px solid black').css("background-color", "#ADD8E6").css("width", '25%').css('display', 'flex').css('flex-direction', 'column').css('align-items', 'center').css('justify-content', 'center').css('align-self', 'center')

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
    dt: "#time",
    name: 'San Antonio'

}).done(function(data) {
    console.log(data);
    console.log(data.dt)

// parseInt(temp)
    $("#weatherReport").html("<h2>" + "Todays Forecast!" + "</h2>"
        + "<span>" + "City  " + data.name + "</span><br>"
        + "<p>" + "Todays Temp " + parseInt(data.main.temp) + "\u2109" + "</p>"
        + "<p>" + "Humidity " +  data.main.humidity + "%" + "</p>"
        + "<p>" + "Wind " + data.wind.speed + "mph" +"</p>"
        + "<p>" + "Clouds " + data.weather[0].description + "</p>")

// function renderWeather(data) {
    // for (let i = 0; i < data.length; i++) {
    //
    //     var card = '';
    //     card = +'<tr>';
    //     card = +'<td>' + data.name + '</td>';
    //     card = +'<td>' + data.dt + '</td>';
    //     card = +'<td>' + data.weather.join(',') + '</td>'
    //     card = +'</tr>';
    //     return card
    // }
// }
    // data.forEach(function(data) {
    //     var dataHtml = renderWeather(data);
    //     console.log(dataHtml);
    //     $('#weather-report').append(dataHtml);
    // })
});


// data.forEach(function(data) {
//     var dataHtml =  renderWeather(data);
//     console.log(dataHtml);
//     $('#insertProducts').append(dataHtml);
//









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