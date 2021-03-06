"use strict";
console.log('Hello from js')
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(inputColor){
    if(inputColor == 'blue') {
         console.log('blue is the color of the sky');
    } else if(inputColor == 'red') {
         console.log('Strawberries are red');
    } else if(inputColor == 'cyan') {
         console.log('I dont know anything about cyan');
    } else {
        console.log('Huh....what??');
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
analyzeColor(randomColor)
;/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// switch(prompt('Pick a color')) {
//     case "blue":
//         alert('blue is the color of the sky');
//         break;
//     case "red":
//         alert('Strawberries are red');
//         break;
//     case 'cyan':
//         alert('I dont know anything about cyan');
//     default:
//         alert('Huh....what??');
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
//  */
// var userColor = prompt('What is your favorite color?');
// var result = analyzeColor(userColor)
// alert(result)

/* ########################################################################## */
var luckyNumber = Math.floor(Math.random() * 5);
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(x){
//     if(x === 0) {
//         console.log('Awe better luck next time  ;)')
//     } else if(x === 1) {
//         console.log('You won 10% off!')
//     } else if(x === 2) {
//         console.log('You won 25% off!')
//     } else if(x === 3) {
//         console.log('You won 30% off!')
//     } else if(x === 4) {
//         console.log('You won 50% off!')
//     } else if(x === 5) {
//         console.log('Free!!!!')
//     }
// }
// calculateTotal(luckyNumber)
//
// function applyDiscount(x) {
//     if (x === 1 ) {
//         console.log(x + 100 * .10)
//     } else if (console.log((x === 2 + 100) * .25)) {
//         console.log(x + 100 * .25)
//     } else if (console.log((x === 3 + 100) * .30)) {
//         console.log(x + 100 * .30)
//     } else if (x === 4 ) {
//         console.log(x + 100 * .50)
//     } else if (x === 5 ) {
//     console.log(x * 0)
//     }
//     }
// applyDiscount(luckyNumber)
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

// Generate a random number between 0 and 6


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
    // var pickNumber = confirm('Pick a number any number!')
    var luckyNumber = Math.floor(Math.random() * 100);
    function numberFacts(x) {
        if (x >= 0 && x % 2 == 0) {
            console.log( (x + 100) + ' Is positive and even')
        } else if (x <= 0 && x % 2 == 0) {
            console.log( (x + 100) + ' Is a Negative number and even')
        } else if (x >= 0 && x % 2 !== 0 ) {
            console.log( (x + 100) + ' Is positive and odd')
        } else if (x <= 0 && x % 2 !== 0) {
            console.log( (x + 100) + ' Is a Negative number and odd')
        }
    }
//     numberFacts(luckyNumber)
// function stringNum('') {
//         if ('') {
//             console.log(parseInt.length + '')
//         }
// }
// stringNum('red')