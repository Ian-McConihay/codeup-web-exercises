// use strict before the shield
(function () {
    console.log('Hello from Javascript');

// define a named funnction
    function sayHello() {
        console.log('Hello...');
    }

// call the function in js
    sayHello();
// define anonymous function
    var sayHowdy = function () {
        console.log('Howdy!')
    }
// to call the function in the console you have to use ()

//Arguments and Parameters ()
    function add(x, y) {
        return x + y;
    }

    console.log(add(2, 3));

    add(2, 3);

    function subtract(x, y) {
        return x - y;
    }

    console.log(subtract(3, 5));

// Scope
    var student = 'Ian';
    var day = "Friday";

    function tellTheDay() {
        return 'Tell ' + student + 'its ' + day + '!';
    }

    function greeting() {
        var username = 'Ian';
        return 'Hi, ' + username;
    }

    console.log(greeting())
//A global const does not override a local var


})();