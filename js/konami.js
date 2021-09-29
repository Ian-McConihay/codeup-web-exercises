
var cheatCode = [], konami= "38, 38, 40, 40, 37, 39, 37, 39, 66, 65"

function konamiCode() {
    $(document).keyup(function (e) {
        cheatCode.push(e.key);
        if (cheatCode.toString().indexOf(konami) >= 0) {

            $(document).unbind('keydown', arguments.callee);

            // do something awesome
            $("body").addClass("konami");

        }

    });
}
// $(document).ready(function() {
//     konamiCode(function(){
//         alert('Final Form')
//     })
// })