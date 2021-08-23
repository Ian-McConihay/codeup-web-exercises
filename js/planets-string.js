(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|')
    var planetsJoin = planetsArray.join('<br/>')
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsJoin);
//     var plamets = "Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune"
// console.log(plamets)
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// / Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.
var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
 function cleanNum(x) {
    // var cleanedNum = []

 }
console.log(phoneNumbers.split('\n',))




})();

//This is how to sort numbers
// var numSort = [10, 9, 15];
// numSort.sort(function(a, b) {
//     return a - b;
// });
//
// console.log(numSort)