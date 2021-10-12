// Mapbox
mapboxgl.accessToken = mapboxApiToken;
console.log(mapboxApiToken);
$('h1').css('margin', 'auto').css('display', 'flex').css('flex-direction', 'column').css('align-items', 'center').css('justify-content', 'center').css('align-self', 'center')
$('#weatherReport, .forecast').css('border', '3px solid yellow').css("background-color", "#ADD8E6").css("width", '25%').css('display', 'flex').css('flex-direction', 'column').css('align-items', 'center').css('justify-content', 'center').css('align-self', 'center').css('margin', 'auto')
$('body').css('background-color',  '#018281')
$('#fiveDay').css('border' , '4px solid yellow')
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
    exclude:' hourly,alerts,minutely',
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
        + "<p>" + "Wind " + parseInt(data.wind.speed) + "mph" +"</p>"
        + "<p>" + "Clouds " + data.weather[0].description + "</p>")

});


$.ajax("https://api.openweathermap.org/data/2.5/onecall",{
    data: {
        APPID: weatherApiKey,
        lat: 29.4241,
        lon: -98.4936,
        units: 'imperial',
        exclude: ' hourly,alerts,minutely'
    }
    }).done(function(data) {
    console.log(data);
    for(var i = 1; i <= 5; i++ ) {
        $("#fiveDay").append("<div class='card'><h2 class='card-title'>" + "5 Day Forecast!" + "</h2>"
            + "<div class='card-body'><p>" + "Todays Temp " + parseInt(data.daily[i].temp.day) + "\u2109" + "</p>"
            + "<p>" + "Humidity " + data.daily[i].humidity + "%" + "</p>"
            + "<p>" + "Wind " + parseInt(data.daily[i].wind_speed) + "mph" + "</p>"
            + "<p>" + "Clouds " + data.daily[i].weather[0].description + "</p></div>")
    }
});


// // The Map
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center:[-98.4936 , 29.4241],
    zoom: 5,
})
// on: -98.4936, lat: 29.4241}


//Search Bar
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// //Zoom controls
map.addControl(new mapboxgl.NavigationControl());