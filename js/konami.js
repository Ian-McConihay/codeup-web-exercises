
// var cheatCode = [],  konami = "38,38,40,40,37,39,37,39,66,65";

// function konamiCode() {
//     $(document).keyup(function (e) {
//         cheatCode.push(e.key);
//         if (cheatCode.toString().indexOf(konami) >= 0) {
//             $(document).unbind('keydown', arguments.callee);
//             // do something awesome
//             $("body").addClass("konami");
//         }
//     });
// }

// $(document).ready(function() {
//     konamiCode(function(){
//         alert('Final Form')
//     })
// })

// function konamiCode(cc) {
//     $(document).keydown(function (e) {
//         cheatCode += ("" + e.keyCode);
//         if (cheatCode === konami) {
//             return cc();
//         }
//         if (!konami.indexOf(cheatCode)) return;
//         cheatCode = ("" + e.keyCode);
//     });
// }

//
// konamiCode(function () {alert('\o/')})
//
//

$('.giphy-embed').css('display', 'none')



$('h1').css('display', 'flex').css('justify-content', 'center').css('background-color', 'blue').css('color', 'gold').css('border', 'solid', '5px' ).css('border-color', 'white')

$('body').css('background-color', 'black')

var cheatCode = [], konami = "38,38,40,40,37,39,37,39,65,66";


$(document).keyup(function(e) {

    cheatCode.push( e.keyCode );

    if ( cheatCode.toString().indexOf( konami ) >= 0 ) {

        $(document).unbind('keyup',arguments.callee);

        $('.giphy-embed').css('display', 'initial').effect('pulsate')
        $('audio#9000')[0].play()

    }

});

