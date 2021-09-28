var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button1 = $('#btn1');
var button2 = $('#btn2');

button1.click(function(e) {
    alert('Button 1 clicked')
    // $('p').css('background-color', 'blue')
})
button2.dblclick(function() {
    alert('button 2 double clicked')
})

$('p').hover(function (){
    $(this).css('background-color', 'blue')
}, function() {
    $(this).css('background-color', 'inherit')
});


var rebeccaPurple = function (){
    var listItems = document.getElementsByTagName('li');

    for(var i = 0; i < listItems.length; i++){
        listItems[i].style.backgroundColor = 'rebeccapurple';
    }
}

button1.addEventListener("click", rebeccaPurple)

button2.addEventListener("click", function(){

    button1.removeEventListener("click", rebeccaPurple)
})

// button1.addEventListener('click', function(){
//     // alert("Hello Quasar!");
//
//     var listItems = document.getElementsByTagName('li')
//
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].style.backgroundColor = 'rebeccapurple';
//     }
// })
//
// button2.addEventListener('click', function (){
//     button1.removeEventListener('click', function(){
//         // alert("Hello Quasar!");
//
//         var listItems = document.getElementsByTagName('li')
//
//         for(var i = 0; i < listItems.length; i++){
//             listItems[i].style.backgroundColor = 'rebeccapurple';
//         }
//     })
//
// })