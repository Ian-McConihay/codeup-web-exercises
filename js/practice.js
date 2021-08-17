// use strict before the shield
// (function () {
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


// turnary operator
if(true){
    console.log('bla bla');
} else {
    console.log('yeah yeah')
}

(condition) ? console.log('bla bla') : console.log('yeah yeah')
var car = 'vroom vroom'
(car === 'vroom vroom' )




console.log(greeting())
//A global const does not override a local var
var haveSunscreen = false;
var isSunny = true;

    if (isSunny) {
        alert('Dont Forget some sunscreen!');
    } else {
        alert('Good too much sun can cause some issues');
    }

    function trafficColor() {

    var trafficLight = prompt('What color is the traffic light?');

    if(trafficLight.toLowerCase() === 'red'); {
        alert('Stop');
    } else if(trafficLight.toLowerCase() === 'yellow') {
        alert('Slow down');
    } else if(trafficLight.toLowerCase() === 'green') {
    alert('GO');
    } else {
        alert('Be careful!')
    }
}
trafficColor()



// switch statement
switch(prompt('Pick a color')) {
    case "blue":
        alert('blue is the color of the sky');
        break;
    case "red":
        alert('Strawberries are red');
        break;
    case 'cyan':
        alert('I dont know anything about cyan');
    default:
        alert('Huh....what??');
        break;
}
var bike = prompt("lets go ride");

switch(bike) {
    case "hill":
        alert("going down hill");
        break;
    case "car":
        alert("caution");
        break;
    default:
        alert(bike + " fast");
        break;
}
// Loops
// while loop
// do/while
// for loop
//






















// });