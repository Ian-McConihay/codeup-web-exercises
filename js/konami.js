
// var cheatCode = [],  konami = "38,38,40,40,37,39,37,39,66,65";

// function konamiCode() {
//     $(document).keyup(function (e) {
//         cheatCode.push(e.key);
//         if (cheatCode.toString().indexOf(konami) >= 0) {
//
//             $(document).unbind('keydown', arguments.callee);
//
//             // do something awesome
//             $("body").addClass("konami");
//
//         }
//
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

var cheatCode = [], konami = "38,38,40,40,37,39,37,39,66,65";


$(document).keydown(function(e) {

    cheatCode.push( e.keyCode );

    if ( cheatCode.toString().indexOf( konami ) >= 0 ) {

        $(document).unbind('keydown',arguments.callee);

        // do something awesome
        $("body").addClass("konami");

    }

});




